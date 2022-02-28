let input_tarea_nueva = document.getElementById("input_tarea_nueva");
let boton_agregar_tarea = document.getElementById("boton_agregar_tarea");
let lista_tareas = document.getElementById("lista_tareas");

boton_agregar_tarea.addEventListener("click", agregarTareaNueva);

function agregarTareaNueva() {

    /**
     * Construccion de nueva tarea.
     */
    let relleno = document.createElement("li");
    let relleno_checkbox = document.createElement("input");
    let relleno_texto = document.createElement("text");

    relleno_checkbox.type = "checkbox";

    relleno_texto.textContent = input_tarea_nueva.value;

    relleno.appendChild(relleno_checkbox);
    relleno.appendChild(relleno_texto);

    /**
     * Agregar tarea a lista.
     */
    lista_tareas.appendChild(relleno);

    /**
     * Dejando todo listo para proxima tarea.
     */
    input_tarea_nueva.value = "";
}