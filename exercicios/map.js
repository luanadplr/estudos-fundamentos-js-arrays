/*

Exercício 3 — Utilizando map()
Considere o array:

const numeros = [2, 4, 6, 8, 10];

Crie um novo array contendo o triplo de cada número.

*/

const numeros = [2, 4, 6, 8, 10];

const triploNumeros = numeros.map((item) => item * 3);

console.log(triploNumeros);

/*

Depois, crie outro array contendo somente os nomes dos usuários:

const usuarios = [
  { id: 1, nome: "Ana", idade: 22 },
  { id: 2, nome: "Carlos", idade: 17 },
  { id: 3, nome: "Mariana", idade: 28 }
];

*/

const usuarios = [
  { id: 1, nome: "Ana", idade: 22 },
  { id: 2, nome: "Carlos", idade: 17 },
  { id: 3, nome: "Mariana", idade: 28 },
];

const usuariosNome = usuarios.map((item) => item.nome);
console.log(usuariosNome);
