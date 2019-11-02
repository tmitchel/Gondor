package main

import (
	"net/http"

	"github.com/sirupsen/logrus"
	"github.com/tmitchel/gondor"
)

func main() {
	// reader := bufio.NewReader(os.Stdin)
	// fmt.Println("Username: ")
	// text, _ := reader.ReadString('\n')
	// // convert CRLF to LF
	// username := strings.Replace(text, "\n", "", -1)

	conn, _ := gondor.NewConnector("tmitchel", "login.hep.wisc.edu")
	defer conn.Close()

	entries := make(chan []*gondor.Entry, 1)
	go gondor.ParseLogs("tmitchel", conn.Client, entries)

	server := gondor.NewServer(entries)
	if err := http.ListenAndServe(":8000", server.Router); err != nil {
		logrus.Fatalf("Error serving: %v", err)
	}
}
