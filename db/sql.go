package db

import (
	"fmt"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"log"
)

var db *gorm.DB

<<<<<<< HEAD
// InitDB initializes the database
//sqLitePath is the path to the sqlite database file
=======
// initializes the database
// sqLitePath is the path to the sqlite database file
>>>>>>> 718180d45738c371d922c2b776cb39a06e986e1c
func InitDB(sqlitePath string) {
	database, err := gorm.Open(sqlite.Open(sqlitePath), &gorm.Config{})
	if err != nil {
		panic(err)
	} else {
		db = database
	}

	if migrationError := db.AutoMigrate(&Item{}); migrationError != nil {
		log.Fatal(fmt.Sprintf("Migration Error %s", migrationError))
	}
}

<<<<<<< HEAD
// GetDB returns an instance of the database
=======
// returns an instance of the database
>>>>>>> 718180d45738c371d922c2b776cb39a06e986e1c
func GetDB() *gorm.DB {
	return db
}

// Item structure
type Item struct {
	gorm.Model
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Quantity    int     `json:"quantity"`
	Price       float64 `json:"price"`
}
