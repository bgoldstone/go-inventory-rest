package db

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var db *gorm.DB

func InitDB(sqliteRoute string) {
	database, err := gorm.Open(sqlite.Open(sqliteRoute), &gorm.Config{})
	if err != nil {
		panic(err)
	} else {
		db = database
	}
	db.AutoMigrate(&Item{})
}

func GetDB() *gorm.DB {
	return db
}

type Item struct {
	gorm.Model
	Id          int     `json:"id"`
	Name        string  `json:"name"`
	Description string  `json:"description"`
	Quantity    int     `json:"quantity"`
	Price       float64 `json:"price"`
}
