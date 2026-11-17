/*

6. Projeto prático do dia — Gerenciador de Usuários
Entregável principal

Agora vamos reunir os conceitos em um pequeno projeto.

O objetivo é desenvolver um gerenciador de usuários utilizando arrays, objetos e os métodos que estudamos hoje.

Esse exercício simula operações que você pode encontrar em uma API de usuários.
Estrutura inicial
Crie um arquivo chamado userManager.js.

Comece com o seguinte array:

*/

function gerenciadorUsuarios() {
  const users = [
    {
      id: 1,
      nome: "Ana",
      idade: 22,
      isActive: true,
    },
    {
      id: 2,
      nome: "Carlos",
      idade: 17,
      isActive: false,
    },
    {
      id: 3,
      nome: "Mariana",
      idade: 28,
      isActive: true,
    },
    {
      id: 4,
      nome: "Pedro",
      idade: 15,
      isActive: true,
    },
    {
      id: 5,
      nome: "Julia",
      idade: 31,
      isActive: false,
    },
  ];

  return {
    listarUsuarios() {
      return [...users];
    },

    buscarUsuariosPeloId(id) {
      const usuario = users.find((item) => item.id === id);
      return usuario ?? "Usuário não encontrado";
    },

    listarUsuariosAtivos() {
      return users.filter((item) => item.isActive);
    },

    listarMaioresIdades() {
      return users.filter((item) => item.idade > 18);
    },

    listarMenoresIdade() {
      return users.filter((item) => item.idade < 18);
    },

    nomesUsuarios() {
      return users.map((item) => item.nome);
    },

    mediaIdadeUsuarios() {
      const totalIdades = users.reduce((acc, valorAtual) => {
        return acc + valorAtual.idade;
      }, 0);
      const mediaIdades = totalIdades / users.length;
      return mediaIdades;
    },

    usarioMaisVelho() {
      const maisVelho = users.reduce((acc, valorAtual) => {
        if (valorAtual.idade > acc.idade) {
          return valorAtual;
        }

        return acc;
      });
      return maisVelho;
    },

    ordenarUsariosPorIdade() {
      const usariosOrdenados = [...users].sort((a, b) => a.idade - b.idade);
      return usariosOrdenados;
    },

    todosTemMaisde10() {
      return users.every((item) => item.idade > 10);
    },

    algumEstaInativo() {
      return users.some((item) => !item.isActive);
    },

    listaUsariosInativos() {
      return users.filter((item) => !item.isActive);
    },

    resumoUsuarios() {
      return {
        totalUsarios: this.listarUsuarios().length,
        usariosAtivo: this.listarUsuariosAtivos().length,
        usariosInativos: this.listaUsariosInativos().length,
        maioresDeIdade: this.listarMaioresIdades().length,
        menoresDeIdade: this.listarMenoresIdade().length,
        mediaIdade: this.mediaIdadeUsuarios(),
      };
    },
  };
}

const gerenciador = gerenciadorUsuarios();
// console.log(gerenciador.listarUsuarios());
// console.log(gerenciador.buscarUsuariosPeloId(1));
// console.log(gerenciador.listarUsuariosAtivos());
// console.log(gerenciador.listarMaioresIdades());
// console.log(gerenciador.nomesUsuarios());
// console.log(gerenciador.mediaIdadeUsuarios());
// console.log(gerenciador.ordenarUsariosPorIdade());
// console.log(gerenciador.todosTemMaisde10());
// console.log(gerenciador.algumEstaInativo());
// console.log(gerenciador.usarioMaisVelho());
console.log(gerenciador.resumoUsuarios());
