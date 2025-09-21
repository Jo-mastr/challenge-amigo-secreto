// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declarar un arreglo vacio para guardar los nombres de tus amigos
let amigos = [];

//  Esta función se ajecuta cuando se presiona el botón "Agregar amigo"
//  Debe agregar el nombre que recibe como parámetro al arreglo "amigos"

function agregarAmigo() {

    // Captura el valor del input y lo guarda en la variable nombreIngresado
    let nombreIngresado = document.getElementById("amigo").value;
    // .value obtine el texto que el ususrio escribió 
    
    // Validamos que el campo del input no esté vacío
    // .trim() elimina los espacios en blanco al inicio y al final del texto
    // La expresión regular /^[a-zA-Z\s]+$/ permite solo letras y espacios
    if (nombreIngresado.trim() === "" || !/^[a-zA-Z\s]+$/.test(nombreIngresado)) {
        alert("Por favor, inserte un nombre.");

        // evita la recarga de la página y sale de la función
        return; 
    }
    // Agrega el nombre al arreglo
    amigos.push(nombreIngresado);
    // .Push() agrega un elemento al final del arreglo

    document.getElementById("amigo").value = "";
    // Limpiamos el campo del input para que el usuario pueda ingresar otro nombre

    mostrarAmigos();
    // Llamamos a la función mostarAmigos para actualizar la lista en pantalla 
    // Muestra en la página, todos los nombres que se van agregando al arreglo
    
    return;
    // Evita la recarga de la página
}

// Esta función recorre el arreglo "amigos" y actualiza la lista en la página
function mostrarAmigos() {

    // Obtiene el elemento ul donde se mostrarán los nombres
    let lista = document.getElementById("listaAmigos");
    
    // Limpiamos el contenido actual de la lista para evitar duplicados
    lista.innerHTML = "";

    // Recorre el arreglo "amigos" y crea un elemento li por cada nombre
    for (let i = 0; i < amigos.length; i++) {

        // Creamos un elemento li por cada amigo
        let li = document.createElement("li");
        // Asignamos el nombre del amigo al contenido del li
        li.textContent = amigos[i];
        // Agregamos el li a la lista ul
        lista.appendChild(li);
    }
}   

// Esta función hace el sorteo y muestra el nombre del amigo seleccionado
function sortearAmigo() {

    // Validamos que haya al menos un amigo en el arreglo
    if (amigos.length === 0) {
        alert("Debe haber al menos un amigo para sortear.");
        
        // Salimos de la función si no hay suficientes amigos
        return;
    }

    // Genera un índice aleatorio basado en la longitud del arreglo "amigos"
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtiene el nombre del amigo sorteado usando el índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio];

    // Muestra el nombre del amigo en el HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: " <strong>${amigoSorteado}</strong> "`;
}
