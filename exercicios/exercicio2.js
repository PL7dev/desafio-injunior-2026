function calcularFatorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

let continuar = true;

while (continuar) {
    let numero;

    while (true) {
        numero = Number(prompt("Digite um número inteiro positivo"));

        if (Number.isInteger(numero) && numero > 0) {
            break;
        } else {
            console.log("Entrada inválida. Por favor, digite um número inteiro positivo.");
        }
    }

    const fatorial = calcularFatorial(numero);
    console.log(`O fatorial de ${numero} é ${fatorial}.`);

    const resposta = prompt("Deseja calcular o fatorial de outro número? (S/N)").toLowerCase();

    if (resposta !== 's') {
        continuar = false;
    }
}

console.log("Programa encerrado.");
