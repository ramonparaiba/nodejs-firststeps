const express = require('express')
const server = express()
const games = require('./src/data/games.json')

server.get('/', (req, res)=>{
    res.json({message: 'Oi meuzamigo!'})
})
server.get('/users', (req, res)=>{
    res.json({user: 'adamastor'})
})
server.get('/games', (req, res)=>{
    res.json(games)
})

server.listen(8080, ()=>{
    console.log("Servidor rodando com toda a gota!");
})