/*

Exercício 7 — Utilizando reduce()
Considere:

const vendas = [
  { produto: "Notebook", valor: 3500 },
  { produto: "Mouse", valor: 100 },
  { produto: "Teclado", valor: 200 },
  { produto: "Monitor", valor: 1200 }
];


1. Calcule o valor total das vendas.
2. Calcule a média dos valores.
3. Descubra quantos produtos foram vendidos.
Dica: você pode utilizar reduce() para somar e length para contar os elementos.

*/

const vendas = [
  { produto: "Notebook", valor: 3500 },
  { produto: "Mouse", valor: 100 },
  { produto: "Teclado", valor: 200 },
  { produto: "Monitor", valor: 1200 },
];

const valorTotalProdutos = vendas.reduce((acc, valorAtual) => {
  return acc + valorAtual.valor;
}, 0); // 1

const mediaTotalProdutos = valorTotalProdutos / vendas.length; // 2

console.log("Valor total das vendas: " + valorTotalProdutos);
console.log("Média total de valores: " + mediaTotalProdutos);

const produtoVendidos = vendas.length; // 3

console.log("Total de produtos vendidos: " + produtoVendidos);
