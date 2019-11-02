package gondor

import (
	"html/template"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/sirupsen/logrus"
)

type Server struct {
	*mux.Router
	messages []*Entry
}

func NewServer(entries chan []*Entry) *Server {
	router := mux.NewRouter()

	type Data struct {
		Messages []Entry
	}
	var data Data
	t := template.Must(template.ParseFiles("templates/header.html", "templates/dashboard.html"))
	router.HandleFunc("/home", func(w http.ResponseWriter, r *http.Request) {
		var msg []*Entry

		select {
		case msg = <-entries:
			var message []Entry
			for _, m := range msg {
				message = append(message, *m)
			}
			data = Data{Messages: message}
		default:
			logrus.Info("No messages recieved")
		}
		w.Header().Set("Content-Type", "text/html")
		if err := t.ExecuteTemplate(w, "dashboard", data); err != nil {
			logrus.Error(err)
		}
	}).Methods("GET")

	return &Server{
		Router: router,
	}
}
