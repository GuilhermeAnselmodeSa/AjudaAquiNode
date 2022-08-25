//carregando o modulo do express
var express = require("express");
//essa variavel recebe a funacao, o modulo express, e a funcao cria uma instancia pra dentro da variavel app
const app = express(); //deixar a var em uma constante pra nao ter perigo de sobrescrita de dados

//ROTAS
// o que sao rotas? o erro Cannot GET/ ocorre pois nao temos rotas definidas, e as mesmas sao basicamente um caminho para nossa aplicacao

//rota principal:

app.get("/", function(req, res){
   //send serve para enviar algo, tipo uma mensagem
    res.sendFile(__dirname+"/html/index.html")
})
//a variavel __dirname retorna o diretorio onde esta o arquivo raiz do projeto, no caso, o arquivo onde voce chamou a variavel...

//digamos que eu quero criar o caminho localhost:8081/sobre
//só criar mais uma rota

app.get("/sobre", function(req, res){
    res.sendFile(__dirname+"/html/sobre.html")
})

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu Blog!!")
})


//trabalhando com parametros
//para exemplificar e entender na pratica, vamos criar uma rota chamada ola, que fala ola + nome, exemplo? ola laura
//parametr seria um valor dinamico que um usuario consegue passar, e para criar um parametr vc usa /:
// app.get("/ola/:nome/:cargo", function(req, res){
//     res.send('Olá') 
// })
//agora para mostrar apenas ola, como no exemplo acima, utilizamos?

// app.get("/ola/:nome/:cargo", function(req, res){
//     res.send(req.params) //resultado disso? uma tabela json!!
// })
//req é a primeira variavel que a gente cria na função de callback e recebe dados de uma requisicao
//quando o usuario digita os parametros, ele envia os dados atraves de uma requisicao http para o servidor node
//atravez do obj req, conseguimos obter dados da requisicao que foi feita, inclusive parametros.

//agora vamos deixar legal, contatenando e etc
//detalhe, o send, dentro de uma roda, só pode ser enviado uma vez...
app.get("/ola/:nome/:cargo/:cor", function(req, res){
    res.send("<h1>Ola "+req.params.nome+"</h1>"+"<h2> Seu cargo e: "+req.params.cargo+"</h2>"+"<h3> Sua cor favorita é: "+req.params.cor+"</h3>"); //o ".nome" serrve para chamar um parametro especifico
})



//Nodemon: npm install nodemon -g =>é um modulo que faz com que nao haja necessidade de ficar reiniciando o servidor a todo momentonome
//para rodar o projeto, é só digitar nodemon 

















//criar um servidor http com express+node; ESTA FUNCAO TEM QUE SER SEMPRE A ULTIMA DE SEU CÓDIGO
app .listen(8081, function(){
    console.log("Servidor rodando na url: http://localhost:8081");
})
//como coloco uma mensagem tipo "server rodando"? 
//eu utilizo uma funcao de callback, que é uma funcao disparada quando algum evento ta funcionando
