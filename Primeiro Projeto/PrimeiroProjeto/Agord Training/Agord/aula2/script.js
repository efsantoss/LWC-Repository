var pessoa = {
    nome: "Angelo",
    idade: 21,     
    saudacao: function() {
        console.log("Ola, eu sou " + this.nome + "!");
    }
 }
 pessoa.saudacao();

 const pessoa1 = {
    nome: "Cleito",
    idade: 25,
    saudacao: saudacao
 };

 const pessoa2 = {
    nome: 'Cheech',
    idade: 25,
    saudacao: saudacao,
 };

 pessoa1.saudacao();
 pessoa2.saudacao();


 var arr = [];
 console.log(typeof arc, arc);

 let meuArray = [1,2,3,4,5,6];
 let arrayDeString=[
    "Maçã","Banana","UmAnao"
 ];

 console.log(typeof meuArray, meuArray);
 console.log(typeof arrayDeString, arrayDeString);

 let arrayMisto = [
    1,
    "Cheech",
    true,
    {chave: "valor"}
 ];

 console.log(typeof arrayMisto, arrayMisto);

 //spread operator
 function sum(x, y, z){ 
    return x + y + z;
 };

 const numbers = [1,2,3];
 console.log(sum(...numbers));
 //console.log(sum.apply(null, numbers));