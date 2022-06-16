package backend

//contains all of the routes for the item rest API
import (
	"net/http"
	"strconv"

	"github.com/bgoldstone/go-inventory-rest/db"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

var database *gorm.DB
var invalidID gin.H = gin.H{"Error": "Item does not exist"}

// initializes all of the routes
// dbRoute is the path to the SQLite database
func InitRoutes(dbRoute string) {
	db.InitDB(dbRoute)
	database = db.GetDB()
}

//gets all items
func getItems(c *gin.Context) {
	var items []db.Item
	database.Find(&items)
	c.IndentedJSON(http.StatusOK, gin.H{"Items": items})

}

// gets an item based on its id
func getItem(c *gin.Context) {
	id := c.Param("id")
	var item db.Item
	database.Where("id = ?", id).Find(&item)
	// if ID is invalid, return bad request.
	if item.ID == 0 {
		c.IndentedJSON(http.StatusBadRequest, invalidID)
	} else {
		c.IndentedJSON(http.StatusOK, gin.H{"Items": item})
	}
}

// creates a new Item
func createItem(c *gin.Context) {
	var newItem db.Item
	c.BindJSON(&newItem)
	database.Create(&newItem)
	c.IndentedJSON(http.StatusCreated, newItem)
}

// updates an item
func updateItem(c *gin.Context) {
	var newItem db.Item
	var currentItem db.Item
	c.BindJSON(&newItem)
	// find item with the given id.
	database.Where("id = ?", c.Param("id")).Find(&currentItem)

	// if ID is invalid, return bad request.
	if currentItem.ID == 0 {
		c.IndentedJSON(http.StatusBadRequest, invalidID)
	} else {
		id, _ := strconv.ParseInt(c.Param("id"), 0, 0)
		newItem.ID = uint(id)

		// checks if new fields were given in the request body.
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

// deletes an item
func deleteItem(c *gin.Context) {
	var currentItem db.Item
	database.Where("id", c.Param("id")).Find(&currentItem)
	database.Delete(currentItem)
	//if ID is invalid, return bad request.
	if currentItem.ID == 0 {
		c.IndentedJSON(http.StatusBadRequest, invalidID)
	} else {
		c.IndentedJSON(http.StatusAccepted, gin.H{"Item": currentItem})
	}

}
