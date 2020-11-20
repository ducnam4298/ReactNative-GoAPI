//main.go
package main

import (
	"gin-gorm/Config"
	"gin-gorm/Quiz"
	"log"

	"github.com/jinzhu/gorm"
)

var err error

func main() {
	Config.DB, err = gorm.Open("mysql", Config.DbURL(Config.BuildDBConfig()))
	if err != nil {
		log.Fatal(err)
	}
	defer Config.DB.Close()
	Config.DB.AutoMigrate(&Quiz.Question{})
	Config.DB.AutoMigrate(&Quiz.Answer{})
	// Config.DB.AutoMigrate(&Answer.Answer{})
	r := Quiz.QuizRouter()
	// r = Answer.AnswerRouter()
	//running
	r.Run(":8080")
}
