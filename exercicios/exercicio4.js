const valorReais = Number(prompt("Digite o valor em reais (R$):"));

if (valorReais < 0 || isNaN(valorReais)) {
    console.log("Valor inválido");
} else {
    const cotacaoDolar = 5.70;
    const cotacaoEuro = 6.10;

    const valorDolar = valorReais / cotacaoDolar;
    const valorEuro = valorReais / cotacaoEuro;

    console.log(`Valor em reais: R$${valorReais.toFixed(2)}`);
    console.log(`Valor em dólares: $${valorDolar.toFixed(2)}`);
    console.log(`Valor em euros: €${valorEuro.toFixed(2)}`);
}