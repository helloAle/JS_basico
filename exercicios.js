/*

 */

// Contando quantas letras uma frase possui
let word = "paralelepipedo";
console.log(word.length);
let number = 1234;
console.log(String(number).length);

// Trocando ponto por virgula
let num = 23243.323242;
console.log(num.toFixed(2).replace(".",","));
// console.log(Number(num.toFixed(1).replace(".",","))); ---> Not a Number NaN
 
// procurando se a palavra existe na frase
let frase = "Eu quero viver!";
console.log(frase.includes("Amor"));

//separando a frase
let phrase = "Eu quero viver o Amor!";
let myArray = phrase.split(" ");
console.log(myArray);
let phrasewu = myArray.join("_");
console.log(phrasewu.toLowerCase());

// Tranformando cadeia de caracteres em elementos de um array
word = "manipulação";
console.log(Array.from(word));

// Conversão de C° para F°

let celsius = 0;
let fharenheit = 50;
console.log(celsius);
celsius = prompt('celsius');
fharenheit = ((fharenheit - 32)*(5/9))
console.log(fharenheit);