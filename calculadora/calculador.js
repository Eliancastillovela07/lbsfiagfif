

function escribir(valor) {
    let pantalla = document.getElementById("pantalla");

    if (pantalla.value == "0") {
        pantalla.value = valor
    } else {
        pantalla.value += valor;
    }
}


function calcula() {
    let pantalla = document.getElementById("pantalla");
    pantalla.value = eval(pantalla.value);
}

function borrar() {
    let pantalla = document.getElementById("pantalla");
    pantalla.value = "0";
}