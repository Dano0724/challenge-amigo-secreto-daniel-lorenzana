// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Se crea un array para almacenas los nombres
let amigos = [];

// Función para agregar un amigo 
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim(); 

    
    if (nombreAmigo === "" ) {
        alert("Por favor, inserte un nombre.");
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

    // Agregar nombre de Amigo a la lista
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li); 
    });

}
// Función para el sorteo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Elegir amigo al azahar   
    const amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];

    // Seleccionar la lista de resultados
    const listaResultado = document.getElementById("resultado");

    // Limpiar la lista
    listaResultado.innerHTML = "";

    // Crear un <li> con el nombre sorteado
    const li = document.createElement("li");
    li.textContent = `Tu amigo secreto es: ${amigoAleatorio}`;

    // Agregarlo a la lista
    listaResultado.appendChild(li);
}
