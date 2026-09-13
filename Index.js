const prompt = require('prompt-sync')();
const { Tareas} = require("./modelo/tareas.js");
const { verTareas, agregarTarea, buscarTarea } = require("./controlador/tareas.js");

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

