package backend

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

var server *gin.Engine

//initializes gin server
//hostname is the hostname and port of the server
//dbPath is the path to the database file
func InitBackend(hostname string, dbPath string) {
	server = gin.Default()
	setRoutes()
	InitRoutes(dbPath)
	runServer(&hostname)
}

//returns gin server
func GetServer() *gin.Engine {
	return server
}

//starts up http server
func runServer(route *string) {
	http.ListenAndServe(":8080", server)
	logString := fmt.Sprintf("Starting up server on port %v", route)
	log.Fatal(logString)
}

//sets up all of the routes
func setRoutes() {
	server.GET("/items", getItems)
	server.GET("/item/:id", getItem)
	server.POST("/items", createItem)
	server.PUT("/item/:id", updateItem)
	server.DELETE("/item/:id", deleteItem)
}
