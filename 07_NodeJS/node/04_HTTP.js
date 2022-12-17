const http = require('http')

http.createServer((req, res) => {
    
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end("<h1>Hello World!</h1>")

}).listen(3000, (err) =>{
    if (err) {
        console.log(err)
    } else {
        console.log("Servidor Rodando na Porta 3000")
    }
})