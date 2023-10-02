package main

import (
	"io/fs"
	"log"
	"net/http"
	"xzr/litgo/web"
)

func main() {
	mutex := http.NewServeMux()
	distDir, err := fs.Sub(web.Dist, "dist/web")
	if err != nil {
		log.Fatalf("no dist/web directory")
	}
	mutex.Handle("/", http.FileServer(http.FS(distDir)))

	err = http.ListenAndServe(":8080", mutex)
	if err != nil {
		log.Fatal(err)
	}
}
