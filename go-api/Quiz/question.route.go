package Quiz

import (
	"github.com/gin-gonic/gin"
)

//SetupRouter ... Configure routes
func QuizRouter() *gin.Engine {
	r := gin.Default()
	api := r.Group("api")
	{
		api.GET("/question", GetRecords)
		api.GET("/question/:id", GetRecordByID)
		api.POST("/question", CreateRecord)
		api.PUT("/question/:id", UpdateRecord)
		api.DELETE("/question/:id", DeleteRecord)
	}
	return r
}
