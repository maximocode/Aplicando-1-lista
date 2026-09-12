const prompt = require('prompt-sync')();
const { Tareas, crearTarea, resolverValor, buscarID} = require("./modelo/tareas.js");
const { mostrarDetalles } = require("./vista/tareas.js");

let op;

console.log("Buenos días!! Bienvenido a la aplicación de Tareas");
do {//menu principal
    console.log("---------------------------------------- \n");
    console.log("¿Qué deseas hacer?");
    console.log("[1] Ver mis Tareas\n"+
        "[2] Agregar una Tarea\n"+
        "[3] Buscar una Tarea\n"+
        "[4] Salir\n"
    );
    op = parseInt(prompt());
    console.log("---------------------------------------- \n");

    switch (op) {
        case 1:
            verTareas(Tareas);
            break;
        case 2:
            agregarTarea();
            break;
        case 3:
            buscarTarea(Tareas);
            break;
        case 4:
            console.log("Saliendo...");
            break;
        default:
            console.log("Opción no válida");
    }
} while (op !== 4);

function verTareas(Tareas) {
    let aux;
    let idsMostrados = [];
    let op;
    do{
        console.log("---------------------------------------- \n");
        console.log("Que tareas deseas ver?"); //menu ver tareas
        console.log("[1] Todas\n"+
            "[2] Pendientes\n"+
            "[3] En curso\n"+
            "[4] Completadas\n"+
            "[0] Salir\n"
        );
        op = parseInt(prompt());
        console.log("---------------------------------------- \n");

        switch (op) {
            case 1:
                console.log("Todas las tareas: \n");
                for(let i=0; i<Tareas.length; i++){
                    console.log("[" + Tareas[i].ID + "]" + Tareas[i].Titulo + "\n");
                    idsMostrados.push(Tareas[i].ID);
                }
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
              break;
            case 2:
                for(let i=0; i<Tareas.length; i++){
                    if(Tareas[i].Estado === "P"){
                        console.log(Tareas[i].Titulo);
                        idsMostrados.push(Tareas[i].ID);
                    }
                }
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
                break;
            case 3:
                for(let i=0; i<Tareas.length; i++){
                    if(Tareas[i].Estado === "E"){
                        console.log(Tareas[i].Titulo);
                        idsMostrados.push(Tareas[i].ID);
                    }
                }
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
                break;
            case 4:
                for(let i=0; i<Tareas.length; i++){
                    if(Tareas[i].Estado === "C"){
                        console.log(Tareas[i].Titulo);
                        idsMostrados.push(Tareas[i].ID);
                    }
                }
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
                break;
            case 0:
                console.log("Saliendo...");
                break;  
            default:
                console.log("Opción no válida");
        } 
    }while (op !== 0);  
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

function agregarTarea() {
    let titulo = prompt("Ingrese el título de la tarea: ");
    let descripcion = prompt("Ingrese la descripción de la tarea: ");
    let dificultad;
    do{
        console.log("Ingrese la dificultad de la tarea (1-3): \n");
        dificultad = parseInt(prompt());
    }while (dificultad < 1 || dificultad > 3);
    let estado;
    do{
        console.log("Ingrese el estado de la tarea ([P]endiente, [E]n curso, [C]ompletada): \n");
        estado = prompt();
    }while (estado !== "P" && estado !== "E" && estado !== "C");
    let vencimiento = prompt("Ingrese la fecha de vencimiento de la tarea (dd/mm/aaaa): ");

    crearTarea(titulo, descripcion, dificultad, estado, vencimiento);
}

function buscarTarea(Tareas) {
    const busqueda = prompt("Ingrese el título de la tarea que desea buscar: ");
    let tareasEncontradas = [];
    let aux;
    for (let i = 0; i < Tareas.length; i++) {
        if (Tareas[i].Titulo.toLowerCase().indexOf(busqueda) !== -1) {
            tareasEncontradas.push(Tareas[i]);
        }
    }
    if (tareasEncontradas.length > 0) {
        console.log("Se encontraron las siguientes tareas: \n");
        for (let i = 0; i < tareasEncontradas.length; i++) {
            console.log("[" + tareasEncontradas[i].ID + "] " + tareasEncontradas[i].Titulo + "\n");
        }
        do{
            console.log("Desea ver el detalle de alguna tarea?\n");
            console.log("Ingrese el ID de la tarea que desea ver o 0 para salir\n");
            aux = parseInt(prompt());
        }while (aux !== 0 && aux > tareasEncontradas.length);
        if(aux !== 0){
            for (let i = 0; i < tareasEncontradas.length; i++) {
                if (tareasEncontradas[i].ID === aux) {
                    tareaEncontrada = tareasEncontradas[i];
                    break;
                }
            }
            Detalles(tareaEncontrada);
        } else {
            console.log("Saliendo...");
        }
    } else {
        console.log("No se encontró ninguna tarea con ese título");
    }

}