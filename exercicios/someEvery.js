/*

Exercício 6 — Utilizando some() e every()
Considere:

const idades = [18, 22, 25, 17, 30];

Responda utilizando os métodos:
1. Existe alguma pessoa menor de idade?
2. Todas as pessoas são maiores de idade?
3. Existe alguma pessoa com mais de 25 anos?
4. Todas as pessoas possuem idade superior a 15 anos?
Observe que cada pergunta deve retornar um booleano.

*/

const idades = [18, 22, 25, 17, 30];

console.log(idades.some((item) => item < 18)); // 1 true
console.log(idades.every((item) => item > 18)); // 2 false
console.log(idades.some((item) => item > 25)); // 3 true
console.log(idades.every((item) => item > 15)); // 4 true
