// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function mostrarListaAmigos() {
    //Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
    let lista = document.getElementById('listaAmigos');

    //Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
    lista.innerHTML = "";

//Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        //Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
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
    //Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    //Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
    let amigoSorteado = amigos[indiceAleatorio];

    //Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
    document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}