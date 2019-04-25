package main

import (
	"bufio"
	"bytes"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"strconv"
	"strings"
	"syscall"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/ssh"
	"golang.org/x/crypto/ssh/terminal"
)

func HostKeyCallback(key ssh.PublicKey) ssh.HostKeyCallback {
	return func(hostname string, remote net.Addr, key ssh.PublicKey) error {
		return nil
	}
}

type Entry struct {
	Username, DAG, Date, Time  string
	Done, Running, Idle, Total int
	IDRange                    []string
}

func NewEntry(fields []string) (*Entry, error) {
	if len(fields) < 9 {
		return nil, fmt.Errorf("Entry must have at least 9 fields. Got %v", len(fields))
	}
	Done, _ := strconv.Atoi(fields[4])
	Running, _ := strconv.Atoi(fields[5])
	Idle, _ := strconv.Atoi(fields[6])
	Total, _ := strconv.Atoi(fields[7])
	return &Entry{
		Username: fields[0],
		DAG:      fields[1],
		Date:     fields[2],
		Time:     fields[3],
		Done:     Done,
		Running:  Running,
		Idle:     Idle,
		Total:    Total,
		IDRange:  fields[8:],
	}, nil
}

func ParseLogs(user string, client *ssh.Client, channel chan []*Entry) {
	for {
		fmt.Println("NEW parse")
		var entries []*Entry

		session, err := client.NewSession()
		if err != nil {
			log.Fatal("Failed to create session: ", err)
		}
		defer session.Close()

		var b bytes.Buffer
		session.Stdout = &b
		if err := session.Run("condor_q -run -submitter " + user); err != nil {
			log.Fatal("Failed to run: " + err.Error())
		}

		lines := strings.Split(b.String(), "\n")
		for _, line := range lines {
			if strings.Contains(line, user+" ") {
				entry, err := NewEntry(strings.Fields(line))
				if err != nil {
					log.Fatal("Bad entry: ", err)
				}
				entries = append(entries, entry)
			}
		}
		if len(channel) > 0 {
			<-channel
		}
		channel <- entries
		time.Sleep(5 * time.Minute)
	}
}

func main() {

	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Username: ")
	text, _ := reader.ReadString('\n')
	// convert CRLF to LF
	username := strings.Replace(text, "\n", "", -1)

	fmt.Println("Password: ")
	bytePassword, err := terminal.ReadPassword(int(syscall.Stdin))
	password := string(bytePassword)

	var hostKey ssh.PublicKey

	// An SSH client is represented with a ClientConn.
	//
	// To authenticate with the remote server you must pass at least one
	// implementation of AuthMethod via the Auth field in ClientConfig,
	// and provide a HostKeyCallback.
	config := &ssh.ClientConfig{
		User: username,
		Auth: []ssh.AuthMethod{
			ssh.Password(password),
		},
		HostKeyCallback: HostKeyCallback(hostKey),
	}
	client, err := ssh.Dial("tcp", "login.hep.wisc.edu:22", config)
	if err != nil {
		log.Fatal("Failed to dial: ", err)
	}

	entries := make(chan []*Entry, 1)
	go ParseLogs(username, client, entries)

	gin.SetMode(gin.ReleaseMode)
	r := gin.Default()
	r.Use(static.Serve("/", static.LocalFile("./public", false)))
	r.Use(cors.Default()) // Maybe change from Default later

	var msg []*Entry
	r.GET("/api", func(c *gin.Context) {
		select {
		case msg = <-entries:

		default:
			fmt.Println("no message received")
		}
		c.JSON(http.StatusOK, gin.H{"jobs": msg})
	})
	r.POST("/api", func(c *gin.Context) {
		type req struct {
			ID string `json:"id"`
		}

		var request req
		if err := c.ShouldBindJSON(&request); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err})
			fmt.Println(err)
			return
		}

		fmt.Printf("POST made with id: %+v\n", request)
	})
	r.Run(":8000")
}
