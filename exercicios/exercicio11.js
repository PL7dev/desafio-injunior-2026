const quantidade = Number(prompt("Quantos números deseja inserir?"));
const numeros = [];

if (!Number.isInteger(quantidade) || quantidade <= 0) {
    console.log("Quantidade inválida.");
} else {
    for (let i = 0; i < quantidade; i++) {
        const numero = Number(prompt(`Digite o número ${i + 1}:`));
        numeros.push(numero);
    }

    let contador = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > numeros[i - 1]) {
            contador++;
        }
    }
    
    console.log("Quantidade de números em ordem crescente:", contador);
}

