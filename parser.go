package gondor

import (
	"bytes"
	"fmt"
	"log"
	"strconv"
	"strings"
	"time"

	"golang.org/x/crypto/ssh"
)

type Parser interface {
	ParseLogs(string, *ssh.Client, chan []*Entry)
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
