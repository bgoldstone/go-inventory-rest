package backend

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

var server *gin.Engine

//initializes gin server
func InitBackend(route string, dbRoute string) {
	server = gin.Default()
	setRoutes()
	InitRoutes(dbRoute)
	runServer(&route)
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

func setRoutes() {
	server.GET("/items", getItems)
	server.POST("/items", createItem)
	server.PUT("/item/{id}", updateItem)
	server.DELETE("/item/{id}", deleteItem)
}
