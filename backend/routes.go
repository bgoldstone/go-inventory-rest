package backend

import (
	"net/http"

	"github.com/bgoldstone/go-inventory-rest/db"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

var database *gorm.DB

func InitRoutes(dbRoute string) {
	db.InitDB(dbRoute)
	database = db.GetDB()
}

func getItems(c *gin.Context) {
	var items []db.Item
	database.Find(&items)
	c.JSON(http.StatusOK, gin.H{"Items": items})

}
func getItemByID(c *gin.Context) {
	var items []db.Item
	database.Find(&items)
	c.JSON(http.StatusOK, gin.H{"Items": items})

}
func createItem(c *gin.Context) {

}

func updateItem(c *gin.Context) {

}
func deleteItem(c *gin.Context) {

}
