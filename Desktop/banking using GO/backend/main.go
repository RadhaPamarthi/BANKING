package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/register", registerHandler).Methods("POST")
	r.HandleFunc("/login", loginHandler).Methods("POST")
	r.HandleFunc("/account", accountHandler).Methods("GET")

	log.Println("Server listening on port 8000")
	log.Fatal(http.ListenAndServe(":8000", r))
}

func registerHandler(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode("Register endpoint hit")
}

func loginHandler(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode("Login endpoint hit")
}

func accountHandler(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode("Account endpoint hit")
}
