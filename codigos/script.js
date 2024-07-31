//1. Declaração de Variáveis
let nome = "Maria";
console.log(nome); // Maria
nome = "Pedro";
console.log(nome); // Pedro



//2. Constantes
const PI = 3.14159;
console.log(PI); // 3.14159
// PI = 3.14; // TypeError: Assignment to constant variable



//3. Funções
function saudacao(nome) {
  return `Olá, ${nome}!`;
}
console.log(saudacao("Lucas")); // Olá, Lucas!

const saudacaoArr = (nome) => `Olá, ${nome}!`;
console.log(saudacaoArr("Ana")); // Olá, Ana!



// 4. Manipulando inglês
const id = document.querySelector("#nome").textContent;
const helloWorld = document.getElementById("helloWorld");
const pegaTodosOsP = document.querySelectorAll("p");

console.log(id);
