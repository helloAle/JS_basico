console.log("\nTrabalhando com condicionais\n");
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadecomprador = 13;
const estaAcompanhada = true;
const temPassagemComprada = true;


console.log("Destinos possíveis");
console.log(listaDeDestinos,"\n");

// if(idadecomprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); //removendo item
// } else if(estaAcompanhada == true){
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1,1); //removendo item
// } else{
//     console.log("Comprador não é maior de idade e não posso vender");
// }

if(idadecomprador >= 18 || estaAcompanhada == true){
    console.log("Boa viagem\n");
    listaDeDestinos.splice(2,1); //removendo item
} else{
    console.log("Comprador não é maior de idade e não posso vender");
}
console.log("Embarque: \n\n");
if(idadecomprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
} else{
    console.log("Você não pode embarcar");
}


console.log(listaDeDestinos,"\n");

// console.log(idadecomprador > 18);
// console.log(idadecomprador < 18);
// console.log(idadecomprador <= 18);
// console.log(idadecomprador >= 18);
// console.log(idadecomprador == 18);