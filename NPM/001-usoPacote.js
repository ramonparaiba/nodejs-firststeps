//Baixar o pacote upper-case usando npm pelo terminal
const uc = require('upper-case')
const http = require('http')

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(uc.upperCase('Tah tudo grande'))
    res.end()
}).listen(8080)