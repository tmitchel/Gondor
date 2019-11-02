package main

import (
	"bufio"
	"fmt"
	"net/http"
	"os"
	"strings"

	"github.com/tmitchel/gondor"
)

func main() {
	reader := bufio.NewReader(os.Stdin)
	fmt.Println("Username: ")
	text, _ := reader.ReadString('\n')
	// convert CRLF to LF
	username := strings.Replace(text, "\n", "", -1)

	conn, _ := gondor.NewConnector(username, "login.hep.wisc.edu")
	defer conn.Close()

	entries := make(chan []*gondor.Entry, 1)
	go gondor.ParseLogs(username, conn.Client, entries)

	server := gondor.NewServer(entries)
	http.ListenAndServe(":8000", server.Router)
}
