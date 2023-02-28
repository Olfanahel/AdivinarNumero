let texto = document.querySelector(".texto-numero");
let boton = document.querySelector(".btn-adivinar");
let botonVolver = document.querySelector(".btn-volver");
let guia = document.getElementById("guia");
let intentosTexto = document.getElementById("intentosRestantes");
let dexter = document.getElementById("imagenDexter");


let numeroAleatorio = parseInt(Math.random()*50);
let intentos = 10;

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
    if(intentos < 10 && numeroAleatorio != numeroPantalla){
        dexter.src = 'dexter2.png';
    }
    if(intentos < 3 && numeroAleatorio !=  numeroPantalla){
        dexter.src = 'dexter3.png';
    }
    if(intentos === 0 && numeroAleatorio != numeroPantalla){
        dexter.src = 'dexter-perder.png';
        boton.classList.toggle("ocultar");
        botonVolver.classList.toggle("ocultar");
        guia.innerHTML = `El numero era ${numeroAleatorio}`;
        intentosTexto.innerHTML = `No te rindas aun puedes volver a jugar!`;
    }
})

botonVolver.addEventListener('click',e=>{
    location.reload();
})