function meuFormulario () {
    const form = document.querySelector('.form');
    const resultado= document.querySelector('resultado')
    const pessoas = [];
//    form.onsubmit = function (evento) {
//        evento.preventDefault(); //preventDefault() é para prevenir o que acontece por padrão. Neste Caso, //não enviar o formulario
//        alert(1)
//    };
    /*let contador = 1;*/
    function recebeEventoForm (evento) {
        evento.preventDefault();
       /*console.log (`Fomr não enviado ${contador}`)
        contador++;*/
        const nome = form.querySelector('nome');
        const sobrenome = form.querySelector('sobrenome');
        const peso = form.querySelector('peso');
        const altura = form.querySelector('altura');

        pessoas.push ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        })

        console.log(pessoas);
        resultado.innerHTML += <p>${nome.value} ${sobrenome.value} #{peso.value} ${altura}</p>

        
    }
    form.addEventListener('submit',recebeEventoForm); //Basicamente está me perguntando qual evento eu quero "escutar". Neste caso eu coloquei submit dentro dos parenteses para referir e este evento
}
meuFormulario();