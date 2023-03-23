//Ler o conteúdo de outro arquivo
const http = require('http') 
const fs = require('fs')

const server = http.createServer((req, res) => {
    fs.readFile('animais.html', (err, data)=>{      
        res.writeHead(200, {'Content-Type': 'text/html'}) //Passa a usar 'text/html'
        res.write(data)
        return res.end()
    })
}).listen(8000)
