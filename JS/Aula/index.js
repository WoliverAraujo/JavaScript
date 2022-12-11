const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for ( let i in numeros) {
    let numero = numeros[i];

    if (numero ===2){
        console.log ('Pulei o numero 2')
        continue;
    }

    if (numero === 7){
        console.log('O número 7 foi encontrado aqui... então é o fim')
        break;
    }

    console.log(numero);
}
