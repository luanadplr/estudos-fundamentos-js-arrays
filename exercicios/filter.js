/*

Exercício 4 — Utilizando filter()
Utilize o array de usuários anterior.
1. Crie um array contendo somente os usuários maiores de idade.
2. Crie um array contendo somente os usuários menores de idade.
3. Crie um array contendo somente os usuários com idade superior a 20 anos.
Confira se os resultados estão corretos.

*/

const usuarios = [
  { id: 1, nome: "Ana", idade: 22 },
  { id: 2, nome: "Carlos", idade: 17 },
  { id: 3, nome: "Mariana", idade: 28 },
];

const maioresIdade = usuarios.filter((item) => item.idade > 18);
console.log(maioresIdade);

const menoresIdade = usuarios.filter((item) => item.idade < 18);
console.log(menoresIdade);

const usuariosCom20 = usuarios.filter((item) => item.idade > 20);
console.log(usuariosCom20);
