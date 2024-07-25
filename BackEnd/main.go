package main

import (
	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		a := 3
		c.JSON(200, gin.H{
			"": a,
		})
	})
	log.Println("\nServer start on http://localhost:8080")
	r.Run()
}
