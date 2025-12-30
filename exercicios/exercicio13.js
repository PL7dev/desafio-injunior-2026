const time = [];

function adicionarJogador(nome, idade, posicao, pontuacao) {
  const jogador = {
    nome,
    idade,
    posicao,
    pontuacao
  };

  time.push(jogador);
}

function buscarPorPosicao(posicao) {
  const encontrados = [];

  for (const jogador of time) {
    if (jogador.posicao.toLowerCase() === posicao.toLowerCase()) {
      encontrados.push(jogador);
    }
  }

  if (encontrados.length === 0) {
    console.log("Nenhum jogador encontrado para essa posição.");
  } else {
    console.log(`Jogadores na posição ${posicao}:`);
    for (const jogador of encontrados) {
      console.log(jogador);
    }
  }
}

function listarTime() {
  if (time.length === 0) {
    console.log("Nenhum jogador cadastrado.");
  } else {
    for (const jogador of time) {
      console.log(jogador);
    }
  }
}

function calcularPontuacaoMedia() {
  if (time.length === 0) {
    console.log("Não há jogadores no time.");
    return;
  }

  let soma = 0;

  for (const jogador of time) {
    soma += jogador.pontuacao;
  }

  const media = soma / time.length;
  console.log("Pontuação média do time:", media.toFixed(2));
}

while (true) {
  const opcao = prompt(
    "Menu:\n1 - Adicionar jogador\n2 - Buscar por posição\n3 - Listar time\n4 - Calcular pontuação média\n5 - Sair"
  );

  if (opcao === "1") {
    const nome = prompt("Nome do jogador:");
    const idade = Number(prompt("Idade do jogador:"));
    const posicao = prompt("Posição do jogador:");
    const pontuacao = Number(prompt("Pontuação do jogador:"));

    adicionarJogador(nome, idade, posicao, pontuacao);
    console.log("Jogador adicionado com sucesso.");

  } else if (opcao === "2") {
    const posicao = prompt("Digite a posição:");
    buscarPorPosicao(posicao);

  } else if (opcao === "3") {
    listarTime();

  } else if (opcao === "4") {
    calcularPontuacaoMedia();

  } else if (opcao === "5") {
    console.log("Encerrando o programa.");
    break;

  } else {
    console.log("Opção inválida.");
  }
}