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

function buscarID(Tareas, aux, idsMostrados) {
    let esValido = false;
    let tareaEncontrada;
    for (let i = 0; i < idsMostrados.length; i++) {
        if (idsMostrados[i] === aux) {
            esValido = true;
        }
    }
    if (!esValido) {
        return undefined;
    } else {
        for (let i = 0; i < Tareas.length; i++) {
            if (Tareas[i].ID === aux) {
                tareaEncontrada = Tareas[i];
                break;
            }
        }
    }

    return tareaEncontrada;
}

module.exports = {Tareas, crearTarea, resolverValor, buscarID};