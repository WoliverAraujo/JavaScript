//               01234567
let umaString = 'Um texto'
console.log(umaString[3])//Retorna com um valor do texto. Neste caso o valor vai ser "t" porque a contagem começa do 0
console.log(umaString.charAt(3))//Faz mesma coisa que o de cima
console.log(umaString.indexOf('texto')) //Procura um texto ou letra e me fala em qual posição esta.
console.log(umaString.lastIndexOf('texto')) // Igual o de cima. Porem começa de tras pra frente.
console.log(umaString.lastIndexOf('t, 5'))// igual o de cima, mas neste caso está começando da posição 2.
console.log(umaString.search(/m/)) //Pesquisa dentro da String
console.log(umaString.replace(/Um/, 'Outro texto de novo'))// .replace procura a palavra na string e substitui pelo o que você escolher
console.log(umaString.concat(' Outro texto'))
console.log(umaString + ' Outro texto')
console.log(`${umaString} Outro texto`)
