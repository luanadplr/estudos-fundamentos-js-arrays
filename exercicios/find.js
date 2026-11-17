/*

Exercício 5 — Utilizando find() e findIndex()
Utilize novamente o array de usuários.
1. Encontre o usuário com ID 2.
2. Encontre o usuário chamado "Mariana".
3. Descubra o índice do usuário com ID 3.
4. Tente encontrar um usuário com ID 10 e observe o resultado.
Lembre-se: find() retorna undefined quando não encontra o elemento, e findIndex() retorna -1.

*/

const usuarios = [
  { id: 1, nome: "Ana", idade: 22 },
  { id: 2, nome: "Carlos", idade: 17 },
  { id: 3, nome: "Mariana", idade: 28 },
];

console.log(usuarios.find((item) => item.id === 2)); // 1
console.log(usuarios.find((item) => item.nome === "Mariana")); // 2
console.log(usuarios.findIndex((item) => item.id === 3)); // 3
console.log(usuarios.findIndex((item) => item.id === 10)); // 4
