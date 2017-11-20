const port = 3003

//middware, ajuda a fazer o parser do body da requisição
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

//urlencoded é o formato dos dados quando é feito a submissão de um formulário
//bodyparser vai interpretar mais tipos de informações que venham
server.use(bodyParser.urlencoded({ extended: true}))
//pergunta se o conteúdo recebido é json, se for, vai fazer uma interpretação 
//transformando o json em um objeto
server.use(bodyParser.json())

//mostra mensagem caso tenha conectado com sucesso
server.listen(port, function(){
    console.log(`BACKEND is running on port ${port}`)
})

