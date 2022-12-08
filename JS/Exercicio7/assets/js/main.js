const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgrondColorBody = estilosBody.backgroundColor;
console.log (backgrondColorBody);

for (let p of ps){
    p.style.backgroundColor = backgrondColorBody;
    p.style.color = '#ffffff'
}
