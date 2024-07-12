class Pessoa {
    constructor(nome, idade, sexo, profissao, nacionalidade) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.profissao = profissao;
        this.nacionalidade = nacionalidade;
    }
}

let pessoa1 = new Pessoa('Joaquim', 17, 'Masculino', 'Advogado', 'Brasileira');
let pessoa2 = new Pessoa('Maria', 30, 'Feminino', 'Advogada', 'Brasileira');
let pessoa3 = new Pessoa('Pedro', 35, 'Masculino', 'Advogado', 'Português');

let pessoas = [pessoa1, pessoa2, pessoa3];

for (let i = 0; i < pessoas.length; i++) {
    let pessoa = pessoas[i];

    if (pessoa.nacionalidade === 'Brasileira' && pessoa.idade > 18) {
        console.log(`${pessoa.nome}, Processo Aprovado!`);
    } else {
        console.log(`${pessoa.nome}, processo reprovado.`);
    }
}
