let texto = document.querySelector(".texto-numero");
let boton = document.querySelector(".btn-adivinar");
let botonVolver = document.querySelector(".btn-volver");
let guia = document.getElementById("guia");
let intentosTexto = document.getElementById("intentosRestantes");
let dexter = document.getElementById("imagenDexter");


let numeroAleatorio = parseInt(Math.random()*100);
let intentos = 3;

let numeroPantalla;
console.log(numeroAleatorio);

boton.addEventListener('click',e=>{
    numeroPantalla = parseInt(texto.value);
    if(numeroPantalla > numeroAleatorio){
        intentos--;
        guia.innerHTML = `Mas bajo`;
        intentosTexto.innerHTML = `Intentos restantes ${intentos}`;
    }else if(numeroPantalla < numeroAleatorio){
        intentos--;
        guia.innerHTML = `Mas alto`;
        intentosTexto.innerHTML = `Intentos restantes ${intentos}`;
    }else if(numeroPantalla == numeroAleatorio){
        dexter.src = 'dexter-ganar.png';
        boton.classList.toggle("ocultar");
        botonVolver.classList.toggle("ocultar");
        guia.classList.toggle("ocultar");
        intentosTexto.innerHTML = `Correcto el numero era ${numeroAleatorio}`;
    }
    if(intentos === 2){
        dexter.src = 'dexter2.png';
    }
    if(intentos === 1){
        dexter.src = 'dexter3.png';
    }
    if(intentos === 0){
        dexter.src = 'dexter-perder.png'
    }
})

botonVolver.addEventListener('click',e=>{
    location.reload();
})