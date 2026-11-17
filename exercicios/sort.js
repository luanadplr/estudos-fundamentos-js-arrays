/*

Exercício 8 — Utilizando sort()
Considere:

const funcionarios = [
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 35 },
  { nome: "Mariana", idade: 28 },
  { nome: "Pedro", idade: 19 }
];

1. Ordene os funcionários por idade crescente.
2. Ordene os funcionários por idade decrescente.
3. Ordene os funcionários alfabeticamente pelo nome.
4. Preserve o array original nas operações.

*/

const funcionarios = [
  { nome: "Ana", idade: 22 },
  { nome: "Carlos", idade: 35 },
  { nome: "Mariana", idade: 28 },
  { nome: "Pedro", idade: 19 },
];

const idadeCrescente = [...funcionarios].sort((a, b) => {
  return a.idade - b.idade;
}); // 1

console.log(idadeCrescente);

const idadeDescrescente = [...funcionarios].sort((a, b) => {
  return b.idade - a.idade;
}); // 2

console.log(idadeDescrescente);

const ordemAlfabetica = [...funcionarios].sort();
console.log(ordemAlfabetica);
