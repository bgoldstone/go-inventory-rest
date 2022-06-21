package backend

import (
	"fmt"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"log"
)

var server *gin.Engine

// InitBackend initializes gin server
// hostname is the hostname and port of the server
// dbPath is the path to the database file
func InitBackend(hostname string, dbPath string) {
	server = gin.Default()
	setRoutes()
	InitRoutes(dbPath)
	cc := cors.DefaultConfig()
	cc.AllowHeaders = []string{"Access-Control-Allow-Origin"}
	cc.AllowOrigins = []string{"*"}
	server.Use(cors.New(cc))
	runServer(&hostname)
}

// runServer starts up the http server
func runServer(route *string) {

	if err := server.Run(":8080"); err != nil {
		log.Fatal(fmt.Sprintf("Server Error %s", err))
		return
	}
	logString := fmt.Sprintf("Starting up server on port %s", *route)
	log.Fatal(logString)
}

// setRoutes sets up all the routes
func setRoutes() {
	items := server.Group("/items")
	itemID := server.Group("/item/:id")
	items.GET("", getItems)
	itemID.GET("", getItem)
	items.POST("", createItem)
	itemID.PUT("", updateItem)
	server.GET("/item/:id/delete", deleteItem)
	itemID.DELETE("", deleteItem)
	//itemID.OPTIONS("", optionRequest)
}
