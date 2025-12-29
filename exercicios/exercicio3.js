function verificarIdades(anoNascimento, anoAtual) {
    const resultado = [];

    for (let i = 0; i < anoNascimento.length; i++) {
        const idade = anoAtual - anoNascimento[i];

        if (idade >= 18) {
            resultado.push("Maior de idade");
        } else {
            resultado.push("Menor de idade");
        }
    }

    return resultado;
}

const quantidade = Number(prompt("Quantas pessoas você deseja verificar a idade?"));
const anos = [];

for (let i = 0; i < quantidade; i++) {
    const ano = Number(prompt(`Ano de nascimento da pessoa ${i + 1}:`));
    anos.push(ano);
}

const anoAtual = Number(prompt("Digite o ano atual:"));

const verificacao = verificarIdades(anos, anoAtual);

for (let i = 0; i < verificacao.length; i++) {
    console.log(`Pessoa ${i + 1}: ${verificacao[i] === "maior" ? "Maior" : "Menor"} de idade`);
}