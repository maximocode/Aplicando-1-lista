function resolverValor(valorNuevo, valorViejo) {
    if (valorNuevo === "") {
        return valorViejo;
    } else if (valorNuevo === " ") {
        return "";
    } else {
        return valorNuevo;
    }
}

let Tareas = [];

let ID = 1;

function crearTarea(titulo, descripcion, dificultad, estado, vencimiento){
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

module.exports = {Tareas, crearTarea, resolverValor};