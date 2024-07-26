package main

import (
	"log"
	"math/rand"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		result := rand.Intn(10-1) + 1
		c.JSON(200, gin.H{
			"Result": result,
		})
	})
	log.Println("\nServer start on http://10.0.2.2:8080")
	r.Run() // start server on localhost:8080
}
