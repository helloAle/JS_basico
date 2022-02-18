console.log("Trabalahndo com Listas");
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio De Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,

);

listaDeDestinos.push(`Curituba`); 
//Adicionando um item na lista
console.log("Destinos possíveis");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);


listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);