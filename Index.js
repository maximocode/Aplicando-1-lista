const prompt = require('prompt-sync')();

let ID = 1;

let Tareas = [];
let tareaEncontrada;

console.log("Buenos días!! Bienvenido a la aplicación de Tareas");
do {
    console.log("---------------------------------------- \n");
    console.log("¿Qué deseas hacer?");//menu principal
    let op = parseInt(prompt("[1] Ver mis Tareas\n"+
        "[2] Agregar una Tarea\n"+
        "[3] Buscar una Tarea\n"+
        "[4] Salir\n"
    ));
    console.log("---------------------------------------- \n");

    switch (op) {
        case 1:
            verTareas(Tareas);
            break;
        case 2:
            agregarTarea(Tareas);
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
    do{
        console.log("---------------------------------------- \n");
        console.log("Que tareas deseas ver?"); //menu ver tareas
        let op = parseInt(prompt("[1] Todas\n"+
            "[2] Pendientes\n"+
            "[3] En curso\n"+
            "[4] Completadas\n"+
            "[0] Salir\n"
        ));
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
                    for (let i = 0; i < idsMostrados.length; i++) {
                      if (idsMostrados[i] === aux) {
                         tareaEncontrada = Tareas[i];
                         break;
                        }
                    }
                 Detalles(tareaEncontrada);
                } else {
                    console.log("Saliendo...");
                }
              break;
            case 2:
                for(let i=0; i<Tareas.length; i++){
                    if(Tareas[i].Estado === "Pendiente"){
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
                    for (let i = 0; i < idsMostrados.length; i++) {
                      if (idsMostrados[i] === aux) {
                        tareaEncontrada = Tareas[i];
                        break;
                      }
                    }
                  Detalles(tareaEncontrada);
                } else {
                    console.log("Saliendo...");
                }
                break;
            case 3:
                for(let i=0; i<Tareas.length; i++){
                    if(Tareas[i].Estado === "En curso"){
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
                    for (let i = 0; i < idsMostrados.length; i++) {
                      if (idsMostrados[i] === aux) {
                        tareaEncontrada = Tareas[i];
                        break;
                      }
                    }
                  Detalles(tareaEncontrada);
                } else {
                    console.log("Saliendo...");
                }
                break;
            case 4:
                for(let i=0; i<Tareas.length; i++){
                    if(Tareas[i].Estado === "Completada"){
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
                    for (let i = 0; i < idsMostrados.length; i++) {
                      if (idsMostrados[i] === aux) {
                        tareaEncontrada = Tareas[i];
                        break;
                      }
                    }
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
    let aux2;
    console.log("---------------------------------------- \n");
    console.log("Detalles de la tarea: \n");
    console.log("ID: " + tareaEncontrada.ID + "\n" +
        "Título: " + tareaEncontrada.Titulo + "\n" +
        "Descripción: " + tareaEncontrada.Descripcion + "\n" +
        "Estado: " + tareaEncontrada.Estado + "\n" +
        "Vencimiento: " + tareaEncontrada.Vencimiento + "\n" +
        "Creación: " + tareaEncontrada.Creacion + "\n" +
        "Dificultad: " + tareaEncontrada.Dificultad + "\n");
    do{
        console.log("Desea editar algo de la tarea?\n");
        console.log("[1] si" + "[0] no\n");
        aux2 = parseInt(prompt());
    }while (aux2 !== 0 && aux2 !== 1);
    if(aux2 === 1){
        editarTarea(tareaEncontrada);
    }
}

function editarTarea(tareaEncontrada){ //sin terminar
    console.log("Estas editando la tarea: " + tareaEncontrada.Titulo + "\n");

}

function agregarTarea(Tareas) {
    let titulo = prompt("Ingrese el título de la tarea: \n");
    let descripcion = prompt("Ingrese la descripción de la tarea: \n");
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
    let vencimiento = prompt("Ingrese la fecha de vencimiento de la tarea (dd/mm/aaaa): \n");

    let nuevaTarea = {
        ID:ID++,
        Titulo: titulo,
        Descripcion: descripcion,
        Estado: estado,
        Vencimiento: vencimiento,
        Creacion: new Date().toLocaleDateString(),
        Dificultad: dificultad
    };
    Tareas.push(nuevaTarea);
}

function buscarTarea(Tareas) {
    const busqueda = prompt("Ingrese el título de la tarea que desea buscar: \n");
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