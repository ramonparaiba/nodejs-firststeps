const fs = require('fs')


fs.unlink('outro.txt', (err)=>{
    if (err) throw err
    console.log('Deletado, pae');
})