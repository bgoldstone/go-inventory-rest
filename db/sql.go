package db

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

//initializes the database
//sqLitePath is the path to the sqlite database file
func InitDB(sqlitePath string) {
	database, err := gorm.Open(sqlite.Open(sqlitePath), &gorm.Config{})
	if err != nil {
		panic(err)
	} else {
		db = database
	}
	db.AutoMigrate(&Item{})
}

//returns an instance of the database
func GetDB() *gorm.DB {
	return db
}

//Item structure
type Item struct {
	gorm.Model
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Quantity    int     `json:"quantity"`
	Price       float64 `json:"price"`
}
