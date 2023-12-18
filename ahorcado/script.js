// Arrays y variables

const teclado = document.querySelector('.teclado');

const letrasAbecedario = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const palabras = [
    'avión', 'playa', 'maleta', 'pasaporte', 'hotel', 'mapa', 'excursión', 'explorar', 'cultura', 'aventura',
    'viajero', 'montaña', 'equipaje', 'guía', 'reserva', 'turismo', 'destino', 'travesía', 'adventure', 'descubrir',
    'itinerario', 'naturaleza', 'tradiciones', 'monumento', 'océano', 'isla', 'exploración', 'fotografía', 'transporte'
];

let palabraSeleccionada = '';

let letrasUsuario = [];

const maxIntentos = 6;

let errores = 0;

letrasAbecedario.forEach(letra => {
    const boton = document.createElement('button');
    boton.textContent = letra;
    boton.addEventListener('click', function() {
        
        console.log('Letra clicada:', letra);
    });
    teclado.appendChild(boton);
});


// Funciones

function seleccionarPalabraRandom(){
   const indice = Math.floor(Math.random() * palabras.length);
   palabraSeleccionada = palabras[indice].toLowerCase;
}

function iniciarJuego(){
    window.location.href = "juegoAhorcado.html";
    seleccionarPalabraRandom();
    letrasUsuario = [];
    errores = 0;

}

function ocultarPalabraSeleccionada(){
    let palabraOculta = '';
    for (const letra of palabraSeleccionada) {
        if (letrasUsuario.includes(letra)) {
            palabraOculta += letra + ' ';
        } else {
            palabraOculta += '_ ';
        }
    }
    return palabraOculta.trim();
}

function verificarPalabraCompletada(){
    for (const letra of palabraSeleccionada) {
        if (!letrasUsuario.includes(letra)) {
            return false;
        }
    }
    return true;
}

function juegoPerdido(){
    return errores >= maxIntentos;
}