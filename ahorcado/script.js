// Arrays y variables
const imgAhorcado = document.querySelector(".ahorcado img");
const displayPalabra = document.querySelector(".palabra");
const textoErrores = document.querySelectorAll(".errores b")[0];
const teclado = document.querySelector(".teclado");



const palabras = [
    'avioneta', 'playa', 'maleta', 'pasaporte', 'hotel', 'mapa', 'excursion', 'explorar', 'cultura', 'aventura',
    'viajero', 'monte', 'equipaje', 'guia', 'reserva', 'turismo', 'destino', 'travesia', 'adventure', 'descubrir',
    'itinerario', 'naturaleza', 'tradiciones', 'monumento', 'oceano', 'isla', 'exploración', 'fotografia', 'transporte'
];

let palabraActual, errores = 0;
const maxErrores = 6;



const initGame = (button, letraClicada) => {
    if (palabraActual.includes(letraClicada)) {
        [...palabraActual].forEach((letra, index) => {
            if (letra === letraClicada) {
                displayPalabra.querySelectorAll("li")[index].innerText = letra;
                displayPalabra.querySelectorAll("li")[index].classList.add("adivinada");
            }

        });
    }
    else {
        errores++;
        imgAhorcado.src = `img/${errores}.png`;
    }
    button.disabled = true;
    textoErrores.innerText = `${errores} / ${maxErrores}`;
}

// Creo un botón por cada letra del abecedario y lo imprimo por consola
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    teclado.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));

}

seleccionarPalabraRandom();


// Funciones
function seleccionarPalabraRandom() {
    const palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];

    palabraActual = palabraSeleccionada;
    displayPalabra.innerHTML = palabraSeleccionada.split("").map(() => `<li class="letra"></li>`).join("");
    console.log(palabraSeleccionada);
}

function iniciarJuego() {
    window.location.href = "juegoAhorcado.html";
    seleccionarPalabraRandom();
    letrasUsuario = [];
    errores = 0;

}


function juegoPerdido() {
    return errores >= maxIntentos;
}