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

module.exports = {mostrarDetalles};