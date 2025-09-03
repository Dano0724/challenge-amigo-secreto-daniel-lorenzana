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
