//modulo do node é limitado porém, frameworks nos deixam com infinitas possibilidades
//modulo http nos permite que nos criemos apps webs no back-end(transfira os arquivos e se comunica com o cliente)
var http = require("http"); //como vamos chamar um modulo que faz parte do nucleo do node nao precisa setar o diretorio
//modulo fs: trabalha c arquivos do SO

//após criado, como fazer o servidor exibir uma msg??:
// -a funcao createServer, tem uma funcao dentro dela que pode receber dois parametros: req de requisicao e res de resposta(callbacks)
//res = resposta para o usuario
http.createServer(function(req, res){
res.end("Olá, para reiniciar o servidor sem precisar fechar o CMD, utilize CTRL+C") //end serve para enviar uma mensagem, mas mesmo com apenas isso, o codigo permanece carregando
}).listen(8081);
//http.createserver cria um servidor http local e o .listen serve para setarmos a porta de criação do mesmo

console.log("O servidor esta rodando!");


//o node nao altera as coisas em tempo real... é possível melhorar isso

