interface Estado {
  nome: string;
}

interface Cidade {
  nome: string;
  estado: Estado;
}

interface Endereço {
  rua: string;
  bairro: string;
  cidade: Cidade;
  complemento?: string;
}

const endereco: Endereço = {
  bairro: "Bairro",
  rua: "rua qualquer",
  cidade: {
    nome: "Rio",
    estado: {
      nome: "Rio",
    },
  },
};

console.log(endereco.complemento?.substring(3) || "DEU ERRO");
console.log(endereco);
