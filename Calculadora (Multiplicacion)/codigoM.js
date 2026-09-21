let pantalla = null;

function obtenerPantalla() {
    if (!pantalla) {
        pantalla = document.getElementById("PANTALLA");
    }
    return pantalla;
}

function agregarNumero(numero) {
    const input = obtenerPantalla();
    if (!input) return;
    input.value += numero;
}

function Calcular() {
    pantalla.value = eval(pantalla.value);
}

function Eliminar() {
    const input = obtenerPantalla();
    input.value = null;
}

window.addEventListener("DOMContentLoaded", obtenerPantalla);