package main

import "github.com/bgoldstone/go-inventory-rest/backend"

func main() {
	hostname := "localhost:8080"
	dbRoute := "./db.sqlite3"
	backend.InitBackend(hostname, dbRoute)
}
