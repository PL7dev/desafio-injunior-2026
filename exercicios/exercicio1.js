const a = Number(prompt("Digite o valor de A:"));
const b = Number(prompt("Digite o valor de B:"));
const c = Number(prompt("Digite o valor de C:"));

const delta = b * b - 4 * a * c;

console.log("O valor de delta é: " + delta);

if (delta > 0) {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log("Duas raízes reais:");
    console.log("x1 = " + x1);
    console.log("x2 = " + x2);
} else if (delta === 0) {
    const x = -b / (2 * a);
    console.log("Uma raiz real:");
    console.log("x = " + x);
} else {
    console.log("Não há raízes reais.");
}