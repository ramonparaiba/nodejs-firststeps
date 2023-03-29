//Ler String de consulta
//A função passada para o http.createServer() possui um req argumento que representa a requisição do cliente, como um objeto (objeto http.IncomingMessage).
const http = require('http') 

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write(req.url) //É escrita a URL, neste caso /, que é a raiz
    res.end()
}).listen(8080)