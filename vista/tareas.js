function mostrarDetalles(tareaEncontrada) {
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
}

function menuVerTareas() {
    console.log("---------------------------------------- \n");
        console.log("Que tareas deseas ver?"); //menu ver tareas
        console.log("[1] Todas\n"+
            "[2] Pendientes\n"+
            "[3] En curso\n"+
            "[4] Completadas\n"+
            "[0] Salir\n"
        );
        console.log("---------------------------------------- \n");
}
module.exports = {mostrarDetalles, menuVerTareas};