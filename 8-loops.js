console.log("\nTrabalhando com condicionais\n");
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadecomprador = 18;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";

console.log("\nDestinos possíveis");
console.log(listaDeDestinos,"\n");

const podeComprar = idadecomprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador +=1;
}

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem!");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let cont = 0;cont<3;cont++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
    }

}