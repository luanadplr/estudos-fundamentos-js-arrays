/*

Exercício 2 — Manipulação de objetos
Crie um objeto chamado funcionario com as seguintes propriedades:

{
  nome: "Luana",
  cargo: "Desenvolvedora",
  salario: 3500,
  ativo: true
}

Realize as seguintes operações:
1. Exiba o nome e o cargo.
2. Altere o salário para 4000.
3. Altere o status para false.
4. Adicione uma propriedade chamada departamento.
5. Remova a propriedade departamento.
6. Exiba o objeto atualizado.
*/

const funcionario = {
  nome: "Luana",
  cargo: "Desenvolvedora",
  salario: 3500,
  ativo: true,
};

console.log(funcionario.nome, funcionario.cargo); // 1
funcionario.salario = 4000; // 2
funcionario.ativo = false; // 3
funcionario.departamento = "admin"; // 4
console.log(funcionario);
delete funcionario.departamento; // 5
console.log(funcionario); // 6
