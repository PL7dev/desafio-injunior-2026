function encontrarElementoUnico(numeros) {
    const contador = {};

    for (const numero of numeros) {
        if (contador[numero]) {
            contador[numero]++;
        } else {
            contador[numero] = 1;
        }
    }
    
    for (const numero in contador) {
        if (contador[numero] === 1) {
            return Number(numero);
        }
    }
}

// Exemplo

const numeros = [1, 2, 3, 2, 1];
const elementoUnico = encontrarElementoUnico(numeros);

console.log("Elemento único:", elementoUnico);
