package gondor

import (
	"os"

	"github.com/sirupsen/logrus"
	"golang.org/x/crypto/ssh"
)

// Connector wraps an ssh.Client to add helper functions.
type Connector struct {
	Client *ssh.Client
}

// NewConnector sets up a client and dials the provided remote.
// Once connected, the Connector wrapping the client is returned.
func NewConnector(username, connectpath string) (*Connector, error) {
	password := os.Getenv("GONDORPD")
	config := &ssh.ClientConfig{
		User: username,
		Auth: []ssh.AuthMethod{
			ssh.Password(password),
		},
		HostKeyCallback: ssh.InsecureIgnoreHostKey(),
	}

	// Connect to the remote server and perform the SSH handshake.
	addr := connectpath + ":22"
	client, err := ssh.Dial("tcp", addr, config)
	if err != nil {
		logrus.Fatalf("unable to connect: %v", err)
	}

	return &Connector{
		Client: client,
	}, nil
}

// Close wraps the client.Close() function so that
// defer c.Close()
// can be used by callers.
func (c *Connector) Close() error {
	return c.Client.Close()
}
