package main

import (
	"github.com/bgoldstone/go-inventory-rest/backend"
	"log"
	"os"
	"os/exec"
)

// main function for the inventory REST API.
func main() {
	//go startFrontend()
	startBackend()
}

func startBackend() {
	hostname := "localhost:8080"
	dbPath := "./db.sqlite3"
	backend.InitBackend(hostname, dbPath)
}

func startFrontend() {
	_ = os.Chdir("frontend")
	startup := exec.Command("npm", "start")
	startup.Run()
	output, _ := startup.Output()
	log.Fatal(string(output[:]))
}
