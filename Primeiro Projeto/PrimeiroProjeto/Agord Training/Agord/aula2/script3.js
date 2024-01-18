// filter percorre todo array e mostra os elementos passaram no teste
const numeros = [1,2,3,4,5,6,7,8,9];
const numerosPares = numero.filter(function(element){
    return elemnt % 2 === 0;

});

console.log(numeros);
console.log(numerosPares);
//some
const numeross = [1,2,3,4,5,6,7,8,9];
const temNumPares = numeross.some(function(element){
    return element % 2 === 0 ;
});

console.log(temNumPares);

//sort
const vetor = [1,10,20,5,37,41,59,10000];
vetor.sort((a,b) => {
    if(a>b) return 1;
    if(a<b) return -1;
});
console.log(array);


document.querySelector('p');