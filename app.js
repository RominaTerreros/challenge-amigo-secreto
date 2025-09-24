// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function mostrarListaAmigos() {
    //Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');

    //Limpiar la lista 

    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        //Agregar elementos a la lista
        lista.innerHTML += `<li>${amigo}</li>`;
    }


}

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo !== "") {
        amigos.push(amigo);
        console.log(amigos);
        limpiarCaja();
        mostrarListaAmigos();
    } else {
        alert("Por favor, inserte un nombre.");
    }
}

function limpiarCaja() {
   document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    //Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}