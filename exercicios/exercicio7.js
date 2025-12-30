const frase = prompt("Digite uma frase:");

const fraseFormatada = frase
    .toLowerCase()
    .split(" ")
    .join("");

const fraseInvertida = fraseFormatada
    .split("")
    .reverse()
    .join("");

if (fraseFormatada === fraseInvertida) {
    console.log("A frase é um palíndromo.");
} else {
    console.log("A frase não é um palíndromo.");
}