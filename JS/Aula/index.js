//              0        1        2   
const alunos = ['Luiz', 'Maria', 'João']; //cria array com lista de nomes.
//console.log(alunos[1]);

//alunos [0] = 'Pedro';
//alunos [3] = 'Woliver';
//alunos[alunos.length] = 'Luiza';
//alunos[alunos.length] = 'Ana';
//alunos[alunos.length] = 'Henrique';

alunos.unshift('Luiza') //adiciona no inicio
alunos.push('Ana') // adiciona no fim
alunos.push('Henrique')

const removidoFim = alunos.pop(); // pop apaga o ultimo item da lista. Criei uma variavel para armazenar o item exluido.
const removidoInicio = alunos.shift(); // shift apaga o primeiro item da lista. Criei uma variavel para armazenar o item exluido.

//delete alunos[2] // delete, apaga indice da lista

console.log(removidoFim)
console.log(removidoInicio)
console.log(alunos.slice(0,3)) // lembrando que o ultimo numero não conta. Neste caso vai o numeor 0,1,2
console.log(alunos)