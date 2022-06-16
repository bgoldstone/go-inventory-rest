package main

import "github.com/bgoldstone/go-inventory-rest/backend"

// main function for the inventory REST API.
func main() {
	hostname := "localhost:8080"
	dbPath := "./db.sqlite3"
	backend.InitBackend(hostname, dbPath)
}
