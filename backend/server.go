package backend

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

var server *gin.Engine

// InitBackend initializes gin server
// hostname is the hostname and port of the server
// dbPath is the path to the database file
func InitBackend(hostname string, dbPath string) {
	server = gin.Default()
	setRoutes()
	InitRoutes(dbPath)
	runServer(&hostname)
}

// runServer starts up the http server
func runServer(route *string) {

	if err := http.ListenAndServe(":8080", server); err != nil {
		log.Fatal(fmt.Sprintf("Server Error %s", err))
		return
	}
	logString := fmt.Sprintf("Starting up server on port %s", *route)
	log.Fatal(logString)
}

// setRoutes sets up all the routes
func setRoutes() {
	server.GET("/items", getItems)
	server.GET("/item/:id", getItem)
	server.POST("/items", createItem)
	server.PUT("/item/:id", updateItem)
	server.GET("/item/:id/delete", deleteItem)
	//server.DELETE("/item/:id/", deleteItem)
}
