const nome= 'Woliver';
const sobrenome ='Araújo'
const idade = 33
const peso = 87.5
const altura = 1.75
let imc;
let anoDeNascimento;
imc = peso / (altura*altura)
anoDeNascimento = 2022 - idade;

console.log (`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}, kg`);
console.log (`Tem ${altura} e seu IMC é de ${imc}`);
console.log (nome,'nasceu em',anoDeNascimento);