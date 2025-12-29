const numero = Number(prompt("Digite um número inteiro:"));

if (!Number.isInteger(numero)) {
    console.log("Digite um número válido");
} else {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("fizzbuzz");
    } else if (numero % 3 === 0) {
        console.log("fizz");
    } else if (numero % 5 === 0) {
        console.log("buzz");
    }
}