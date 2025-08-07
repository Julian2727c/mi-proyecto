let numeroSecreto;
let intento = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// Genera un número aleatorio entre 1 y 10 que no se haya sorteado antes
function generarNumeroSecreto() {
    if (listaNumerosSorteados.length === numeroMaximo) {
        console.log("Todos los números ya han sido sorteados."); // ✅ REGISTRO
        asignarTextoElemento('p', 'No hay más números disponibles. Reinicia el juego.');        
        return null;
    }

    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        console.log("Número secreto generado:", numeroGenerado); // ✅ REGISTRO
        return numeroGenerado;
    }
}

// Asigna texto a un elemento del HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Muestra los mensajes de bienvenida y reinicia valores iniciales
function mensajesBienvenida() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Adivina el número entre 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intento = 1;
}

// Verifica el intento del usuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (isNaN(numeroDeUsuario)) {
        asignarTextoElemento('p', 'Por favor ingresa un número válido.');
        return;
    }

    if (numeroSecreto === null) {
        asignarTextoElemento('p', 'No hay más números disponibles. Reinicia el juego.');
        return;
    }

    console.log(`Intento #${intento} - Usuario ingresó: ${numeroDeUsuario}`); // ✅ REGISTRO

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Acertaste el número en ${intento} ${intento === 1 ? 'intento' : 'intentos'}!`);
        asignarTextoElemento('h1', '¡Felicidades!');
        document.getElementById('reiniciar').disabled = false;
    } else if (numeroDeUsuario < numeroSecreto) {
        asignarTextoElemento('p', 'El número es mayor');
        asignarTextoElemento('h1', '¡Intenta de nuevo!');
    } else {
        asignarTextoElemento('p', 'El número es menor');
        asignarTextoElemento('h1', '¡Intenta de nuevo!');
    }

    intento++;
    limpiarCaja();
}

// Limpia la caja de entrada
function limpiarCaja() {
    let campo = document.querySelector('#valorUsuario');
    campo.value = '';
}

// Reinicia el juego
function reiniciarJuego() {
    limpiarCaja();
    mensajesBienvenida();
    document.getElementById('reiniciar').disabled = true;
    console.log("Juego reiniciado"); // ✅ REGISTRO
}

// Ejecutar al cargar
mensajesBienvenida();




    