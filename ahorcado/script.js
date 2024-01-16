// Arrays y variables
let palabraActual, errores = 0;
const maxErrores = 6;
const imgAhorcado = document.querySelector(".ahorcado img");
const displayPalabra = document.querySelector(".palabra");
const textoErrores = document.querySelector(".errores b");
const teclado = document.querySelector(".teclado");
const verificacion = document.getElementsByClassName("letra adivinada");


const palabrasCategorias = [
    { palabra: "avioneta", categoria: "Transporte y Destinos", info: "Una pequeña aeronave utilizada para vuelos cortos." },
    { palabra: "playa", categoria: "Transporte y Destinos", info: "Una extensión de arena y agua en la costa." },
    { palabra: "monte", categoria: "Transporte y Destinos", info: "Una elevación de terreno más alta que una colina." },
    { palabra: "destino", categoria: "Transporte y Destinos", info: "El lugar al que alguien se dirige o viaja." },
    { palabra: "oceano", categoria: "Transporte y Destinos", info: "Una vasta extensión de agua salada." },
    { palabra: "isla", categoria: "Transporte y Destinos", info: "Un pedazo de tierra rodeado de agua." },
    { palabra: "crucero", categoria: "Transporte y Destinos", info: "Un viaje en barco de placer." },
    { palabra: "excursion", categoria: "Actividades y Experiencias", info: "Un viaje breve con propósitos recreativos." },
    { palabra: "explorar", categoria: "Actividades y Experiencias", info: "Descubrir un lugar desconocido." },
    { palabra: "cultura", categoria: "Actividades y Experiencias", info: "Las creencias, valores y tradiciones de un grupo de personas." },
    { palabra: "aventura", categoria: "Actividades y Experiencias", info: "Una experiencia emocionante y riesgosa." },
    { palabra: "viajero", categoria: "Actividades y Experiencias", info: "Una persona que viaja por placer o negocio." },
    { palabra: "turismo", categoria: "Actividades y Experiencias", info: "La industria de viajes y recreación." },
    { palabra: "travesia", categoria: "Actividades y Experiencias", info: "Un viaje largo y difícil." },
    { palabra: "descubrir", categoria: "Actividades y Experiencias", info: "Encontrar algo nuevo o desconocido." },
    { palabra: "naturaleza", categoria: "Actividades y Experiencias", info: "El mundo natural, incluyendo plantas y animales." },
    { palabra: "tradiciones", categoria: "Actividades y Experiencias", info: "Prácticas culturales transmitidas de generación en generación." },
    { palabra: "monumento", categoria: "Actividades y Experiencias", info: "Una estructura con valor histórico o cultural." },
    { palabra: "exploracion", categoria: "Actividades y Experiencias", info: "La acción de investigar o descubrir territorios desconocidos." },
    { palabra: "fotografia", categoria: "Actividades y Experiencias", info: "El arte de capturar imágenes con una cámara." },
    { palabra: "maleta", categoria: "Equipamiento y Preparativos", info: "Un contenedor para llevar ropa y pertenencias en un viaje." },
    { palabra: "pasaporte", categoria: "Equipamiento y Preparativos", info: "Un documento de identificación para viajar internacionalmente." },
    { palabra: "hotel", categoria: "Equipamiento y Preparativos", info: "Un lugar para alojarse durante un viaje." },
    { palabra: "mapa", categoria: "Equipamiento y Preparativos", info: "Una representación gráfica de una región geográfica." },
    { palabra: "equipaje", categoria: "Equipamiento y Preparativos", info: "Las pertenencias que llevas contigo en un viaje." },
    { palabra: "guia", categoria: "Equipamiento y Preparativos", info: "Un libro o persona que proporciona información sobre un lugar." },
    { palabra: "reserva", categoria: "Equipamiento y Preparativos", info: "Hacer una reserva para asegurar un servicio o alojamiento." },
    { palabra: "itinerario", categoria: "Equipamiento y Preparativos", info: "Un plan detallado de actividades en un viaje." },
    { palabra: "transporte", categoria: "Equipamiento y Preparativos", info: "Los medios utilizados para moverse de un lugar a otro." }
];
  


// Para cookies

const btnInicio = document.getElementById('btnInicio');



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
    console.log(letraClicada);
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
    const {palabra, categoria, info} = palabrasCategorias[Math.floor(Math.random() * palabrasCategorias.length)];
    palabraActual = palabra;
    document.querySelector(".categoria b").innerHTML = categoria;
    displayPalabra.innerHTML = palabra.split("").map(() => `<li class="letra"></li>`).join("");
    
    console.log(palabraActual);
    console.log(categoria);
    console.log(info);
}

function iniciarJuego() {
    window.location.href = "juegoAhorcado.html";
    seleccionarPalabraRandom();
    letrasUsuario = [];
    errores = 0
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

// Pq no va info
function popupjuegoGanado(){
    document.getElementById('juegoGanado').style.display = "block";
    document.getElementById('txtGanado').innerHTML="Felicidades, has acertado la palabra";
    document.getElementById('info').innerHTML= info;
}

function popupjuegoPerdido(){
    document.getElementById('juegoPerdido').style.display = "block";
    document.getElementById('txtPerdido').innerHTML="Has perdido, la palabra era: " + palabraActual;
    document.getElementById('info2').innerHTML= info;
}

function cerrarPopup(){
    document.getElementById('juegoGanado').style.display = "none";
    document.getElementById('juegoPerdido').style.display = "none";
}


function volverAJugar(){
    location.reload();
}



// COOKIES
// function guardarProgreso(){
//     localStorage.setItem("nombreUsuario", document.getElementById("nombreUsuario"));
    
// }