package backend

// contains all the routes for the item rest API
import (
	"fmt"
	"github.com/bgoldstone/go-inventory-rest/db"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"log"
	"net/http"
	"strconv"
)

var database *gorm.DB

// InitRoutes initializes all the routes
// dbRoute is the path to the SQLite database
func InitRoutes(dbRoute string) {
	db.InitDB(dbRoute)
	database = db.GetDB()
}

// getItems gets all items
func getItems(c *gin.Context) {
	var items []db.Item
	database.Find(&items)
	c.IndentedJSON(http.StatusOK, gin.H{"Items": items})

}

// getItem gets an item based on its id
func getItem(c *gin.Context) {
	id := c.Param("id")
	var item db.Item
	database.Where("id = ?", id).Find(&item)
	if item.ID == 0 {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"Error": "Invalid ID"})
	} else {
		c.IndentedJSON(http.StatusOK, gin.H{"Items": item})
	}
}

// createItem creates a new Item
func createItem(c *gin.Context) {
	var newItem db.Item

	if jsonError := c.BindJSON(&newItem); jsonError != nil {
		log.Fatal(fmt.Sprintf("Json Error %s", jsonError))
		return
	}
	database.Create(&newItem)
	c.IndentedJSON(http.StatusCreated, gin.H{"Item": newItem})
}

// updateItem updates an item
func updateItem(c *gin.Context) {
	var newItem db.Item
	var currentItem db.Item

	if jsonError := c.BindJSON(&newItem); jsonError != nil {
		log.Fatal(fmt.Sprintf("Json Error %s", jsonError))
		return
	}
	database.Where("id = ?", c.Param("id")).Find(&currentItem)
	if currentItem.ID == 0 {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"Error": "Invalid ID"})
	} else {
		id, _ := strconv.ParseInt(c.Param("id"), 0, 0)
		newItem.ID = uint(id)
		if newItem.Name == "" {
			newItem.Name = currentItem.Name
		}
		if newItem.Description == "" {
			newItem.Description = currentItem.Description
		}
		if newItem.Quantity == 0 {
			newItem.Quantity = currentItem.Quantity
		}
		if newItem.Price == 0 {
			newItem.Price = currentItem.Price
		}
		database.UpdateColumns(&newItem)
		c.IndentedJSON(http.StatusAccepted, gin.H{"Item": newItem})
	}
}

// deleteItem deletes an item
func deleteItem(c *gin.Context) {
	var currentItem db.Item
	database.Where("id", c.Param("id")).Find(&currentItem)
	database.Delete(currentItem)
	if currentItem.ID == 0 {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"Error": "Invalid ID"})
	} else {
		c.IndentedJSON(http.StatusOK, gin.H{"Item": currentItem})
	}

}
