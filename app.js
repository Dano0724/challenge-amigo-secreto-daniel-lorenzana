// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Se crea un array para almacenas los nombres
let amigos = [];

// Función para agregar un amigo 
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim(); 

    
    if (nombreAmigo === "" ) {
        alert("Por favor, inserte un nombre válido (solo letras)");
        return;
    } 

   

  
    amigos.push(nombreAmigo);


    inputAmigo.value = "";

    
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz 
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");


    listaAmigos.innerHTML = ""; 

    // Agregar cada amigo a la lista
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li); 
    });

}

console.log ("listaAmigos");
