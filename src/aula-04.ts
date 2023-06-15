interface Pessoas {
  idade: number;
  nome: string;
}

interface Usuarios {
  pessoas: Pessoas[];
  cidade: string;
}

const usuario: Usuarios = {
  cidade: "Vila velha",
  pessoas: [
    {
      idade: 50,
      nome: "André",
    },
    {
      idade: 25,
      nome: "Julia",
    },
    {
      idade: 31,
      nome: "João",
    },
  ],
};

console.log(usuario.pessoas.length);
console.log(usuario);
