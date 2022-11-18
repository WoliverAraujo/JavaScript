const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>
Seu numero é ${numero}<br>
A raiz de ${numero} é ${Math.sqrt(numero)} ${numero} <br>
É um numero inteiro? ${Number.isInteger(numero)}<br>
É ${Number.isNaN(numero)}
Arredondamento para baixo: ${Math.floor(numero)} <br>
Arredondamento para cima ${Math.ceil(numero)}<br>
Este número com duas casas decimais é ${numero.toFixed(2)}
</p>`;