// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// en este array se guardan los nombres que se ingresan 
let amigos = [];
function agregarAmigo() {
    // lo que escribe el usuario en el input
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // 2. Validamos que no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // 3. Agregamos el nombre al array
    amigos.push(nombre);

    // 4. Limpiamos el campo de texto
    input.value = "";

    // 5. Mostramos la lista actualizada en pantalla
    mostrarLista();
}

function mostrarLista() {
    // 1. Buscamos el <ul> donde van los nombres
    let lista = document.getElementById("listaAmigos");

    // 2. Limpiamos el contenido de la lista (por si ya tenía algo)
    lista.innerHTML = "";

    // 3. Recorremos el array 'amigos' y creamos <li> para cada nombre
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}
function sortearAmigo() {
    // 1. Validamos que la lista no esté vacía
    if (amigos.length === 0) {
        alert("Primero debes añadir al menos un amigo.");
        return;
    }

    // 2. Elegimos un índice al azar
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Buscamos el <ul> del resultado
    let resultado = document.getElementById("resultado");

    // 4. Mostramos el amigo sorteado
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigos[indiceAleatorio]}</strong></li>`;
}
function reiniciarLista() {
    // Vaciar el array
    amigos = [];

    // Vaciar la lista de la página
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    alert("La lista se ha reiniciado ✅");
}

