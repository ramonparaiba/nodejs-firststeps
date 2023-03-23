const fs = require('fs')

fs.open('outro.txt', 'w', (err, file)=>{
    if(err) throw err
    console.log('Criado');
})