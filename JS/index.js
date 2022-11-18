let num1 = 1;
let num2 = 2.5;
let num3 = 1.58556454684;


console.log(num1.toString() + num2)
console.log(num3.toFixed(2))//arredonda somente na visualização
num3 = Number(num3.toFixed(2))//arredonda dentro do programa
console.log(Number.isInteger(num1))// para saber so o numero é inteiro
console.log(Number.isInteger(num3))
console.log(Number.isInteger(num2))