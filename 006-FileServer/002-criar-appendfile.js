const fs = require('fs')

fs.appendFile('criadoComAppend.txt', 'Sou um criadorzin!', (err)=>{
    if(err) throw err
    console.log('Arquivo Criado com sucesso');
})