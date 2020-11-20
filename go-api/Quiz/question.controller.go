package Quiz

import (
	"fmt"
	// "gin-gorm/Handle"
	// "gin-gorm/Models"
	"net/http"

	"github.com/gin-gonic/gin"
)

//GetRecords ...
func GetRecords(c *gin.Context) {
	var question []Question
	err := Gets(&question)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, question)
	}
}

//CreateRecord ...
func CreateRecord(c *gin.Context) {
	var question Question
	c.BindJSON(&question)
	err := Create(&question)
	if err != nil {
		fmt.Println(err.Error())
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, question)
	}
}

//GetRecordByID ...
func GetRecordByID(c *gin.Context) {
	id := c.Params.ByName("id")
	var question Question
	err := GetByID(&question, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, question)
	}
}

//UpdateRecord ...
func UpdateRecord(c *gin.Context) {
	var question Question
	id := c.Params.ByName("id")
	err := GetByID(&question, id)
	if err != nil {
		c.JSON(http.StatusNotFound, question)
	}
	c.BindJSON(&question)
	err = Update(&question, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, question)
	}
}

//DeleteRecord ...
func DeleteRecord(c *gin.Context) {
	var question Question
	id := c.Params.ByName("id")
	err := Delete(&question, id)
	if err != nil {
		c.AbortWithStatus(http.StatusNotFound)
	} else {
		c.JSON(http.StatusOK, gin.H{"id" + id: "is deleted"})
	}
}
