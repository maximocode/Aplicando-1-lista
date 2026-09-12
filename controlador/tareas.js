const prompt = require('prompt-sync')();
const { mostrarDetalles } = require("../vista/tareas.js");
const { buscarID, resolverValor } = require("../modelo/tareas.js");


function verDetalles(Tareas, idsMostrados) {
    let aux;
    do{
        console.log("Desea ver el detalle de alguna tarea?\n");
        console.log("Ingrese el ID de la tarea que desea ver o 0 para salir\n");
        aux = parseInt(prompt());
    }while (aux !== 0 && aux > idsMostrados.length);
    if(aux !== 0){
        let tareaEncontrada = buscarID(Tareas, aux, idsMostrados);
        Detalles(tareaEncontrada);
    } else {
        console.log("Saliendo...");
    }
}

function Detalles(tareaEncontrada) {
    mostrarDetalles(tareaEncontrada);
    let aux2;
    do{
        console.log("Desea editar algo de la tarea?\n");
        console.log("[1] si" + "[0] no\n");
        aux2 = parseInt(prompt());
    }while (aux2 !== 0 && aux2 !== 1);
    if(aux2 === 1){
        editarTarea(tareaEncontrada);
    }
}

function editarTarea(tareaEncontrada){ 
    console.log("Estas editando la tarea: " + tareaEncontrada.Titulo + "\n" +
        "- Si desea mantener cualquier valor, simplemente deje en blanco. \n" +
        "- Si quiere dejar en blanco un campo, escriba un espacio. \n");
    let nuevoTitulo = prompt("Ingrese el nuevo título de la tarea: ");
    tareaEncontrada.Titulo = resolverValor(nuevoTitulo, tareaEncontrada.Titulo);
    let nuevaDescripcion = prompt("Ingrese la nueva descripción de la tarea: ");
    tareaEncontrada.Descripcion = resolverValor(nuevaDescripcion, tareaEncontrada.Descripcion);
    let nuevaDificultad;
    do{
        nuevaDificultad = prompt("Ingrese la nueva dificultad de la tarea (1-3): ");
    }while (nuevaDificultad !== "" && nuevaDificultad !== " " && (nuevaDificultad < "1" || nuevaDificultad > "3"));
    tareaEncontrada.Dificultad = parseInt(resolverValor(nuevaDificultad, tareaEncontrada.Dificultad));
    let nuevoEstado;
    do {
      nuevoEstado = prompt("2. Estado ([P]/[E]/[C]): ");
    } while (nuevoEstado !== "" && nuevoEstado !== " " && nuevoEstado !== "P" && nuevoEstado !== "E" && nuevoEstado !== "C");
    tareaEncontrada.Estado = resolverValor(nuevoEstado, tareaEncontrada.Estado);
    let nuevaFechaVencimiento = prompt("Ingrese la nueva fecha de vencimiento de la tarea (dd/mm/aaaa): ");
    tareaEncontrada.Vencimiento = resolverValor(nuevaFechaVencimiento, tareaEncontrada.Vencimiento);
    console.log("Tarea editada correctamente: \n");
}