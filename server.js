const http = require('http')
const server = http.createServer((req, res)=>{
	res.end("Hello") 
})
const PORT = process.env.PORT || 8080
server.listen(PORT, ()=>{
	console.log("listening")
	})