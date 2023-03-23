const url = require('url')

//url.parse serve para tratar um endereço

const endereco = 'http://localhost:8000/default.htm?year=2023&month=March'
const qr = url.parse(endereco, true) 

console.log(qr.host)
console.log(qr.pathname)
console.log(qr.search)


const qData = qr.query
console.log(qData.month);