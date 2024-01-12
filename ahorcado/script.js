// Arrays y variables
const imgAhorcado = document.querySelector(".ahorcado img");
const displayPalabra = document.querySelector(".palabra");
const textoErrores = document.querySelector(".errores b");
const teclado = document.querySelector(".teclado");
const verificacion = document.getElementsByClassName("letra adivinada");


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
                button.style.backgroundColor = "green";
                
            }

        });
    }
    else {
        errores++;
        imgAhorcado.src = `img/${errores}.png`;
        button.style.backgroundColor = "red";
    }
    button.disabled = true;
    
    textoErrores.innerText = `${errores} / ${maxErrores}`;
    verificarSolucion();
    // console.log(palabraActual.length);
    // console.log(verificacion.length);
    verificarErrores();

    
}

// Creo un botón por cada letra del abecedario
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

function verificarErrores(){
    if (errores == maxErrores){
        popupjuegoPerdido();
        console.log("Noob");
    }
}
function verificarSolucion(){
    if (verificacion.length == palabraActual.length) {
        popupjuegoGanado();
    }
}

function popupjuegoGanado(){
    document.getElementById('juegoGanado').style.display = "block";
}
function cerrarPopup(){
    document.getElementById('juegoGanado').style.display = "none";
    document.getElementById('juegoPerdido').style.display = "none";
}
function popupjuegoPerdido(){
    document.getElementById('juegoPerdido').style.display = "block";
}

function volverAJugar(){
    location.reload();
}