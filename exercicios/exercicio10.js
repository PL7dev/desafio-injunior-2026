const fila = [];

function mostrarFila() {
    if (fila.length === 0) {
        console.log("A fila está vazia.");
    } else {
        console.log("Clientes na fila:");
        for (let i = 0; i < fila.length; i++) {
            console.log(`${i + 1}. ${fila[i]}`);
        }
    }
}

while (true) {
    mostrarFila();

    const opcao = prompt(
    "Menu: \n1 - Novo Cliente\n2 - Atender Cliente\n3 - Sair"
    );

    if (opcao === "1") {
        const nome = prompt("Digite o nome do cliente:");
        fila.push(nome);
        console.log(`${nome} foi adicionado à fila.`);
    } else if (opcao === "2") {
        if (fila.length === 0) {
            console.log("Não há clientes para atender");
        } else {
            const atendido = fila.shift();
            console.log(`${atendido} foi atendido.`);
        }
    } else if (opcao === "3") {
        console.log("Encerrando o programa.");
        break;
    } else {
        console.log("Opção inválida");
    }
}