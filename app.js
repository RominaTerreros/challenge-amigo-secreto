// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo !== "") {
        amigos.push(amigo);
        console.log(amigos);
        limpiarCaja();
        asignarTextoElemento('li',amigo);
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

function limpiarCaja() {
   document.querySelector('#amigo').value = '';
}
