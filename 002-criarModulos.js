//Dá pra criar seus próprios módulos
const http = require('http') //Http é um módulo node para criação de web servers
const data = require('./minhadataAtual')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write("Oi, mulheres! A data de hoje: " + data.myDateActual())
    res.end()
}).listen(8000)