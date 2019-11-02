package gondor

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/sirupsen/logrus"
)

type Server struct {
	*mux.Router
}

func NewServer(entries chan []*Entry) *Server {
	router := mux.NewRouter()
	router.HandleFunc("/api", HandleAPI(entries)).Methods("GET")

	return &Server{
		Router: router,
	}
}

func HandleAPI(entries chan []*Entry) http.HandlerFunc {
	var msg []*Entry
	return func(w http.ResponseWriter, r *http.Request) {
		select {
		case msg = <-entries:
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusOK)
			if err := json.NewEncoder(w).Encode(msg); err != nil {
				http.Error(w, "Unable to encode JSON", http.StatusInternalServerError)
				logrus.Errorf("Unable to encode JSON %v due to %v", msg, err)
			}
		default:
			logrus.Info("No messages recieved")
		}
	}
}
