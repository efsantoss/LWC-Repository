//push add valores no final do array

var arr1 = ["x", "y", "z"];
var arr2 = [...arr1];

arr2.push("LWC");


const pessoaOriginal ={
    nome:"Maria",
    sexo:"Fem",
    idade: 20
};

const pessoaModificada = {
    ...pessoaOriginal,
    idade: 41,
    profissao: "Dev"
};

//Interpolacao
const idade = 4.5;
const idadeTerrestre = `Estima-se q a terra tenha idade de ${idade} bilhao de anos`;
//NAO ESQUECE A CRASEEEEE
console.log(frase);

let sentence = " I love lwc";

//include determina se uma string tem o caracter q vc procura ou n
let check = sentence.includes("love");//vai dar false pq o l esta  minusculo
console.log(typeof check, check);

let linguagens = ["JS", "JAVA", "C"];
let check2 = linguagens.includes("C");

console.log(check);

//indexOf usado para retornar a primeira ocorrencia de uym valor
let dev = "Become a js programmer in lwc at Salesforce";
let index = dev.indexOf('LWC');

console.log(index);//vai dar 26 pq o LWC esta no lwc caracter psição
//se der -1 eh pq n tem

//Startwith verifica se começa com caracter correto ou 
//uma string especifica
let str1 = "Bem vindo ao lwc";

console.log(str1.startsWith("Bem"));


function func() {
    let str = "lwc na sottelli";
    let value = str.startsWith('lwc');
    console.log(value);
};

func();

//slice pega apartir do caracter q vc colocar, no caso o 4 eh jose
//vc pode colcaor o iniciopd e onde vc qwuer pegar e o fim seprando por cvirgula

nome = "Joao jose da silva";
resultante = nome.slice(4);
console.log(resultante);

//lemrbandoi que começa do 0
carros = ["mobi" , 'uno' , 'gol' , "celta" , "argo"];
selecionados = carros.slice(2,4);//vai retornar o gol e o celta
console.log(selecionados);

//upper case manda tudo para maisuculo e lowercase td p  minusculo
let texto = "ola mundo";
let resultado = texto.toUpperCase();
console.log(resultado);

//trimmed p cortar nesse caso cortou o espaço
let str = " corinthians ";
let trimmed = str.trim();
console.log(trimmed);
console.log(str);

const meuArray = [1, 2 ,3, 4, 5];

//metodo
meuArray.forEach(function(element){
    console.log(element);
});

//every testa s etodos os elementos do array testa na função

const cleito = [2, 4, 6, 8];
const resultadocleito = cleito.every(function(element){
    return element % 2 === 0; //dividindo por 2 o resto tem q ser 0 para ser par    
});

//map cria novo vetor de acorod c a condição q vc c=usou na function
let arrray = [ 2, 3 , 4];
let modarray = arrray.map(function(element){
    return element * 3;

});

let users = [
    {firstname: "Cleitao" , lastname: "Da guerra"},
    {firstname: "cheech" , lastname: "Da pao"},


];

let userFullNames = users.map(function(element){
    return `${element.firstName} ${element.lastname}`
});