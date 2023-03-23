//Tanto os métodos append, quanto write, podem ser usados para editar o conteúdo de um arquivo
//O Método appendFile() insere o texto ao fim do já existente
//O Método writeFile() substitui o texto existente

const fs = require('fs')

fs.appendFile('criadoComAppend.txt', '\n Flamengo sempre, eu ei de ser \n', (err)=>{
    if(err) throw err
    console.log('Inserido');
})