/*function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Woliver', 'Araujo','33')
const pessoa2 = criaPessoa('Junior', 'Silva','34')
const pessoa3 = criaPessoa('Paulo', 'Souza','36')
const pessoa4 = criaPessoa('Pedro', 'Pinto','40')

console.log(pessoa1.nome, pessoa2.nome);*/

const pessoa1 = {
    nome: `Fulano`,
    sobrenome: `de Tal`,
    idade: 33,

    fala() {
        console.log(`Olá, eu sou ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`)
    },

    incrementaIdade() {
        this.idade ++;// ++ é para acrescentar. pode ser no incio ou no fim.
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();// aqui tá fazendo a soma da idade
pessoa1.fala();