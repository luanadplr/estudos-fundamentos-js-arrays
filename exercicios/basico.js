/*

Exercício 1 — Manipulação básica de arrays
Crie um array chamado produtos contendo os seguintes elementos:

const produtos = [
  "Notebook",
  "Mouse",
  "Teclado",
  "Monitor"
];

Realize as seguintes operações:
1. Exiba o primeiro produto.
2. Exiba a quantidade de produtos.
3. Adicione "Headset" ao final.
4. Remova o último produto.
5. Verifique se "Mouse" está no array.
6. Exiba todos os produtos.

*/

const produtos = ["Notebook", "Mouse", "Teclado", "Monitor"];

console.log(produtos[0]); // 1
console.log(produtos.length); // 2
produtos.push("Headset"); // 3
console.log(produtos);
produtos.pop(); // 4
console.log(produtos);
console.log(produtos.includes("Mouse")); // 5
console.log(produtos); // 6
