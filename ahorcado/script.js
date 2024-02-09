// cargarProgreso();
// Arrays y variables
let palabraActual, infoPalabra, imagenPalabra, estadoJuego = {},
    letrasAdivinadas = estadoJuego.letrasAdivinadas = [],
    letrasFalladas = estadoJuego.letrasFalladas = [];
errores = estadoJuego.errores = 0;

const maxErrores = 6,
    imgAhorcado = document.querySelector(".ahorcado img"),
    displayPalabra = document.querySelector(".palabra"),
    textoErrores = document.querySelector(".errores b"),
    teclado = document.querySelector(".teclado"),
    verificacion = document.getElementsByClassName("letra adivinada");

const letrasTeclado = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

// teclado();
const palabrasCategorias = [
    { palabra: "avioneta", categoria: "Transporte y Destinos", info: "Una pequeña aeronave utilizada para vuelos cortos.", img: "img/avioneta.jpg" },
    { palabra: "playa", categoria: "Transporte y Destinos", info: "Una extensión de arena y agua en la costa.", img: "img/playa.jpg" },
    { palabra: "monte", categoria: "Transporte y Destinos", info: "Una elevación de terreno más alta que una colina.", img: "img/monte.jpeg" },
    { palabra: "destino", categoria: "Transporte y Destinos", info: "El lugar al que alguien se dirige o viaja.", img: "img/destino" },
    { palabra: "oceano", categoria: "Transporte y Destinos", info: "Una vasta extensión de agua salada.", img: "img/oceano.jpg" },
    { palabra: "isla", categoria: "Transporte y Destinos", info: "Un pedazo de tierra rodeado de agua.", img: "img/isla.jpg" },
    { palabra: "crucero", categoria: "Transporte y Destinos", info: "Un viaje en barco de placer.", img: "img/crucero.png" },
    { palabra: "excursion", categoria: "Actividades y Experiencias", info: "Un viaje breve con propósitos recreativos.", img: "img/excursion.jpg" },
    { palabra: "explorar", categoria: "Actividades y Experiencias", info: "Descubrir un lugar desconocido.", img: "img/explorar.jpg" },
    { palabra: "cultura", categoria: "Actividades y Experiencias", info: "Las creencias, valores y tradiciones de un grupo de personas.", img: "img/magni.png" },
    { palabra: "aventura", categoria: "Actividades y Experiencias", info: "Una experiencia emocionante y riesgosa.", img: "img/aventura.jpg" },
    { palabra: "viajero", categoria: "Actividades y Experiencias", info: "Una persona que viaja por placer o negocio.", img: "img/viajero.jpg" },
    { palabra: "turismo", categoria: "Actividades y Experiencias", info: "La industria de viajes y recreación.", img: "img/turismo.jpg" },
    { palabra: "travesia", categoria: "Actividades y Experiencias", info: "Un viaje largo y difícil.", img: "img/travesia.jpeg" },
    { palabra: "descubrir", categoria: "Actividades y Experiencias", info: "Encontrar algo nuevo o desconocido.", img: "img/descubrir.jpg" },
    { palabra: "naturaleza", categoria: "Actividades y Experiencias", info: "El mundo natural, incluyendo plantas y animales.", img: "img/naturaleza.jpg" },
    { palabra: "tradiciones", categoria: "Actividades y Experiencias", info: "Prácticas culturales transmitidas de generación en generación.", img: "img/tradiciones.jpg" },
    { palabra: "monumento", categoria: "Actividades y Experiencias", info: "Una estructura con valor histórico o cultural.", img: "img/monumento.jpg" },
    { palabra: "exploracion", categoria: "Actividades y Experiencias", info: "La acción de investigar o descubrir territorios desconocidos.", img: "img/exploracion.jpg" },
    { palabra: "fotografia", categoria: "Actividades y Experiencias", info: "El arte de capturar imágenes con una cámara.", img: "img/fotografia.jpg" },
    { palabra: "maleta", categoria: "Equipamiento y Preparativos", info: "Un contenedor para llevar ropa y pertenencias en un viaje.", img: "img/maleta.jpg" },
    { palabra: "pasaporte", categoria: "Equipamiento y Preparativos", info: "Un documento de identificación para viajar internacionalmente.", img: "img/pasaporte.jpg" },
    { palabra: "hotel", categoria: "Equipamiento y Preparativos", info: "Un lugar para alojarse durante un viaje.", img: "img/hotel.jpg" },
    { palabra: "mapa", categoria: "Equipamiento y Preparativos", info: "Una representación gráfica de una región geográfica.", img: "img/mapa.jpg" },
    { palabra: "equipaje", categoria: "Equipamiento y Preparativos", info: "Las pertenencias que llevas contigo en un viaje.", img: "img/equipaje.jpg" },
    { palabra: "guia", categoria: "Equipamiento y Preparativos", info: "Un libro o persona que proporciona información sobre un lugar.", img: "img/guia.jpeg" },
    { palabra: "reserva", categoria: "Equipamiento y Preparativos", info: "Hacer una reserva para asegurar un servicio o alojamiento.", img: "img/reserva.jpg" },
    { palabra: "itinerario", categoria: "Equipamiento y Preparativos", info: "Un plan detallado de actividades en un viaje.", img: "img/iti.jpg" },
    { palabra: "transporte", categoria: "Equipamiento y Preparativos", info: "Los medios utilizados para moverse de un lugar a otro.", img: "img/transporte.jpg" }
];


const btnInicio = document.getElementById('btnInicio');

estadoJuego = JSON.parse(localStorage.getItem('estadoJuego'));
if (estadoJuego !== null) {
    recuperarEstadoJuego();
}


const initGame = (button, letraClicada) => {
    let estadoJuego = JSON.parse(localStorage.getItem('estadoJuego'));
    if (palabraActual.includes(letraClicada)) {

        if (!letrasAdivinadas.includes(letraClicada)) {
            letrasAdivinadas.push(letraClicada);
        }
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

        // let estadoJuego = JSON.parse(localStorage.getItem('estadoJuego'));

        button.style.backgroundColor = "red";
        if (!letrasFalladas.includes(letraClicada)) {
            letrasFalladas.push(letraClicada);
        }
    }
    estadoJuego.letrasAdivinadas = letrasAdivinadas;
    estadoJuego.letrasFalladas = letrasFalladas;
    estadoJuego.errores = errores;
    imgAhorcado.src = `img/${errores}.png`;
    localStorage.setItem('estadoJuego', JSON.stringify(estadoJuego));
    button.disabled = true;
    console.log(letraClicada);
    textoErrores.innerText = `${errores} / ${maxErrores}`;
    verificarSolucion();
    // console.log(palabraActual.length);
    // console.log(verificacion.length);
    verificarErrores();
    // guardarProgreso();
}

// function teclado(){

//     for (let i = 0; i < letrasTeclado.length; i++) {
//         const element = letrasTeclado[i];
//         console.log(element);
//         const button = document.createElement('button');
//         document.querySelector('.teclado').appendChild(button);
//         button.style.width = "25px";
//         button.style.height= "25px";
//         button.textContent = element;
//         button.addEventListener("click",  ()=>initGame(button, element));
//     }
// }

// Creo un botón por cada letra del abecedario
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    teclado.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));
}
seleccionarPalabraRandom();
// guardarProgreso();

// Funciones
function seleccionarPalabraRandom() {
    const { palabra, categoria, info, img } = palabrasCategorias[Math.floor(Math.random() * palabrasCategorias.length)];
    palabraActual = palabra;
    infoPalabra = info;
    imagenPalabra = img;
    document.querySelector(".categoria b").innerHTML = categoria;
    displayPalabra.innerHTML = palabra.split("").map(() => `<li class="letra"></li>`).join("");

    console.log(palabraActual);
    console.log(categoria);
    console.log(infoPalabra);
    console.log(imagenPalabra);
    // guardarProgreso();
}

function iniciarJuego() {
    let nombreUsuario = document.getElementById('nombreUsuario').value;
    if (nombreUsuario == '') {
        // localStorage.setItem('nombreUsuario', 'Sin nombre');
        estadoJuego = {
            'nombreUsuario': 'Sin nombre',
            'errores': 0
        }
        localStorage.setItem('estadoJuego', JSON.stringify(estadoJuego));
    } else {
        // localStorage.setItem('nombreUsuario', nombreUsuario);
        estadoJuego = {
            'nombreUsuario': nombreUsuario,
            'errores': 0
        }
        localStorage.setItem('estadoJuego', JSON.stringify(estadoJuego));
    }
    window.location.href = "juegoAhorcado.html";
    seleccionarPalabraRandom();
    letrasUsuario = [];
    errores = 0;
    recuperarEstadoJuego();
    // cargarProgreso();
}

function verificarErrores() {
    if (errores == maxErrores) {
        popup("Perdiste");
        console.log("Noob");
    }
}
function verificarSolucion() {
    if (verificacion.length == palabraActual.length) {
        popup("Ganaste");
    }
}

function popup(mensaje) {
    document.getElementById('juegoGanado').style.display = "block";
    document.querySelector('.card-title').innerHTML = palabraActual;
    document.querySelector('.card-text').innerHTML = infoPalabra;
    document.querySelector('.img-fluid').src = imagenPalabra;
    document.querySelector('.juego-ganado h2').textContent = mensaje;
    // document.getElementById('txtGanado').innerHTML = "Felicidades, has acertado la palabra";

}

function cerrarPopup() {
    document.getElementById('juegoGanado').style.display = "none";
    document.getElementById('juegoPerdido').style.display = "none";
}


function volverAJugar() {
    window.location.href = "index.html";
    localStorage.removeItem('estadoJuego');
    // borrarProgreso();
}

function recuperarEstadoJuego() {
    const botonesTeclado = teclado.querySelectorAll("button");
    // let estadoJuego = JSON.parse(localStorage.getItem('estadoJuego'));
    // if (estadoJuego == null) {
    //     iniciarJuego();

    // } else {
    textoErrores.innerText = `${estadoJuego.errores} / ${maxErrores}`;
    imgAhorcado.src = `img/${estadoJuego.errores}.png`;
    setTimeout(() => {
        
        botonesTeclado.forEach(button => {
            if (estadoJuego.letrasAdivinadas.includes(button.textContent) || palabraActual.includes(button.textContent) === false) {
                button.disabled = true;
                button.style.backgroundColor = "green";
            }
        });

    }, 150);

    // }
}


// localStorage
// function guardarProgreso() {
//     // const nombreUsuario = document.getElementById('nombreUsuario').value;
//     // console.log(nombreUsuario);
//     const estadoJuego = {
//         // nombreUsuario: nombreUsuario,
//         palabraActual: palabraActual,
//         errores: errores,
//         letrasAdivinadas: Array.from(document.querySelectorAll(".adivinada")).map(el => el.textContent),
//     };
//     localStorage.setItem('progresoJuego', JSON.stringify(estadoJuego));
// }

// function cargarProgreso() {
//     const datosGuardados = localStorage.getItem('progresoJuego');
//     if (datosGuardados == null) {
//         const estadoJuego = JSON.parse(datosGuardados);
//         palabraActual = estadoJuego.palabraActual;
//         errores = estadoJuego.errores;
//         reconstruirEstadoJuego(estadoJuego);
//     } else {
//         iniciarJuego();
//     }
// }


// function reconstruirEstadoJuego(estadoJuego) {
//     displayPalabra.innerHTML = palabraActual.split("").map(letra =>
//         `<li class="letra ${estadoJuego.letrasAdivinadas.includes(letra) ? 'adivinada' : ''}">${estadoJuego.letrasAdivinadas.includes(letra) ? letra : ''}</li>`).join("");

//     imgAhorcado.src = `img/${errores}.png`;
//     textoErrores.innerText = `${errores} / ${maxErrores}`;
//     const botonesTeclado = teclado.querySelectorAll("button");
//     botonesTeclado.forEach(button => {
//         if (estadoJuego.letrasAdivinadas.includes(button.textContent) || palabraActual.includes(button.textContent) === false) {
//             button.disabled = true;
//             button.style.backgroundColor = palabraActual.includes(button.textContent) ? "green" : "red";
//         }
//     });
// }

// function borrarProgreso(){
//     localStorage.removeItem('progresoJuego');
// }
