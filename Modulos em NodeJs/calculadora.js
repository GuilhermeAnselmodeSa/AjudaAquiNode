// Módulos servem para, caso voce ache seu programa mt grande, vode pode dividir eleem outros arquivos

//para carregar um modulo, utilizamos a função require
//"./" significa que esta no mesmo diretorio
//igualaremos o módulo a uma variavel
var SomaFunc = require("./somar");
var SubFunc = require("./subtrair");
var MultiFunc = require("./multi");
var DivFunc = require("./divisao");
//para ler a funcao do modulo:

console.log(SomaFunc(1,2));
console.log(SubFunc(2,2));
console.log(MultiFunc(2,2));
console.log(DivFunc(2,2));