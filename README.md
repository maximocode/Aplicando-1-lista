# Ejercicio 3: ToDo list

Esta lista de tareas cuenta con:

- Menú Principal
- Menú Ver Tareas
- Menú Buscar Tareas (por su nombre)
- Menú Agregar Tareas

### Tareas
Cada tarea cuenta con un **ID** unico, su **nombre**, una breve **descripción**, el **estado** en el que se encuentra, su **vencimiento** y **creación** y, por último la **dificultad**.

Estas están almacenadas en un vector llamado **Tareas**. El cual se va llenando mendiante la función **push**.

```js
Tareas.push(nuevaTarea);
```
### Módulos
La carpeta **Controlador** contiene todas las funciones que interactuan con el usuario mediante prompt().

La carpeta **Modelo** tiene la función que crea la estructura de las tareas y el vector que las almacena, la función que resuelve que es lo que quiere guardar en un posible edición y la función que busca una tarea segun su ID.

La carpeta **Vista** contiene menu principal y ver tareas, función que pregunta si quiere ver detalles y la de los Detalles misma.
