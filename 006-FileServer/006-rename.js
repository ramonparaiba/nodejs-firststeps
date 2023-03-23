const fs = require('fs')

fs.rename('criadoComAppend.txt', 'meuFile.txt', (err)=>{
    if(err) throw err
    console.log('Renomeado com sucesso!');
})