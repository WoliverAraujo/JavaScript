const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento interrompido');
    setResultado('Olá Mundo!')
});

function setResultado (msg){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado')
    p.innerHTML = 'Qual coisa';
    resultado.appendChild(p);
}