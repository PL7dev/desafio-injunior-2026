function fibonacci (n) {
    if (n ===0) return 0;
    if (n ===1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

const quantidade = Number(prompt("Digite o número de termos da sequência:"))

if (!Number.isInteger(quantidade) || quantidade <= 0) {
    console.log("Digite um número inteiro positivo válido");
} else {
    const termos = [];

    for (let i = 0; i < quantidade; i++) {
        termos.push(fibonacci(i));
    }
}

console.log("Sequência de Fibonacci:");
console.log(termos.join(", "));