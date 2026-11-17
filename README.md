# 📚 Semana 1 — Dia 2: Arrays, Objetos e Métodos de Manipulação

## 🎯 Objetivo do estudo

Compreender como trabalhar com arrays, objetos e arrays de objetos em JavaScript, utilizando métodos de manipulação para consultar, filtrar, transformar, ordenar e acumular dados.

Também foram revisados conceitos de **Closure** e sua aplicação na construção de funcionalidades reutilizáveis.

## Conteúdos estudados

- Arrays
- Objetos
- Arrays de objetos
- Manipulação de Arrays
- Spread Operator (...)

### Comparação dos métodos

| Método      | Qual sua finalidade?       | O que retorna?            |
| ----------- | -------------------------- | ------------------------- |
| map()       | Transformar dados          | Novo array transformado   |
| filter()    | Encontrar elementos        | Novo array filtrado       |
| find()      | Localizar um registro      | 1º elemento encontrado    |
| findIndex() | Encontrar a posição        | Índice ou -1              |
| some()      | Verificar se existe algum  | Boolean                   |
| every()     | Verificar se todos atendem | Boolean                   |
| reduce()    | Somar, agrupar, calcular   | Um resultado acumulado    |
| sort()      | Ordenar elementos          | O array original ordenado |

---

- Closure

## Exercícios de fixação

- Exercício 1 — Trabalhando com arrays
- Exercício 2 — Trabalhando com objetos
- Exercício 3 — Array de objetos
- Exercício 4 — map()
- Exercício 5 — filter()
- Exercício 6 — find() e findIndex()
- Exercício 7 — some() e every()
- Exercício 8 — sort()
- Exercício 9 — reduce(): retornando uma string
- Exercício 10 — reduce(): retornando um array
- Exercício 11 — reduce(): retornando um objeto
- Exercício 12 — reduce(): identificando o maior valor
- Exercício 13 — reduce(): total de vendas por vendedor

### Projeto prático — UserManager.js

### Objetivo

Desenvolver um pequeno gerenciador de usuários utilizando JavaScript, Closure e métodos de manipulação de arrays.

O projeto tem como objetivo consolidar os conceitos estudados por meio de uma aplicação que permite consultar, filtrar, organizar e gerar estatísticas de usuários.

### 6.1. Estrutura inicial

Crie uma função chamada `gerenciadorUsuarios()`.

Dentro dela, declare um array privado chamado `users`, contendo cinco usuários.

Cada usuário deverá possuir:

- `id`: identificador do usuário.
- `nome`: nome do usuário.
- `idade`: idade do usuário.
- `isActive`: status de atividade.

Utilize Closure para permitir que os métodos retornados acessem o array `users`.

### 6.2. Funcionalidades obrigatórias

Implemente os seguintes métodos:

| Método                      | Funcionalidade                            | Método de array esperado |
| --------------------------- | ----------------------------------------- | ------------------------ |
| `listarUsuarios()`          | Retornar todos os usuários                | —                        |
| `buscarUsuariosPeloId(id)`  | Buscar um usuário pelo ID                 | `find()`                 |
| `listarUsuariosAtivos()`    | Listar usuários ativos                    | `filter()`               |
| `listarMaioresIdades()`     | Listar usuários maiores de idade          | `filter()`               |
| `listarMenoresIdade()`      | Listar usuários menores de idade          | `filter()`               |
| `nomesUsuarios()`           | Retornar somente os nomes                 | `map()`                  |
| `mediaIdadeUsuarios()`      | Calcular a média das idades               | `reduce()`               |
| `usuarioMaisVelho()`        | Encontrar o usuário mais velho            | `reduce()`               |
| `ordenarUsuariosPorIdade()` | Ordenar usuários por idade                | `sort()`                 |
| `todosTemMaisde10()`        | Verificar se todos têm mais de 10 anos    | `every()`                |
| `algumEstaInativo()`        | Verificar se existe algum usuário inativo | `some()`                 |
| `listarUsuariosInativos()`  | Listar usuários inativos                  | `filter()`               |
| `resumoUsuarios()`          | Retornar um resumo estatístico            | Combinação de métodos    |

### 6.3. Resumo estatístico

O método `resumoUsuarios()` deverá retornar um objeto contendo:

- Total de usuários cadastrados.
- Quantidade de usuários ativos.
- Quantidade de usuários inativos.
- Quantidade de usuários maiores de idade.
- Quantidade de usuários menores de idade.
- Média de idade dos usuários.

### 6.4. Requisitos técnicos

- [x] Utilizar Closure.
- [x] Manter o array de usuários dentro do escopo da função.
- [x] Retornar um objeto contendo os métodos públicos.
- [x] Utilizar os métodos de array estudados.
- [x] Utilizar arrow functions quando apropriado.
- [x] Utilizar template de retorno organizado e legível.
- [x] Evitar modificar o array original durante a ordenação.

## 💻 Commit do projeto

Sugestão de commit utilizando Conventional Commits:

```bash
git add .
git commit -m "feat: implement user management with array methods"
```

---

**Conclusão:** o objetivo deste estudo é desenvolver familiaridade com arrays, objetos, métodos de manipulação e Closure, construindo uma base sólida para trabalhar com coleções de dados em aplicações Back-end com JavaScript e Node.js.
