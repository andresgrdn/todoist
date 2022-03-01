/**
 * Elementos del programa
 */
let input_tarea_nueva = document.getElementById("input_tarea_nueva");
let boton_agregar_tarea = document.getElementById("boton_agregar_tarea");
let lista_tareas = document.getElementById("lista_tareas");

/**
 * Listeners del programa
 */
boton_agregar_tarea.addEventListener("click", agregarTareaNueva);
input_tarea_nueva.addEventListener('change', agregarTareaNueva);

/**
 * Callbacks para funcionalidades
 */

/**
 * Agrega una nueva tarea a la lista de tareas.
 */
function agregarTareaNueva() {

    /**
     * Verificar datos antes de crear nueva tarea nueva
     */
    if (input_tarea_nueva.value == "") return;
    if (input_tarea_nueva.value == " ") return;

    /**
     * Construccion de nueva tarea.
     */
    // partes de la tarea nueva
    let tarea_nueva = document.createElement("li");
    let tarea_nueva_checkbox = document.createElement("input");
    let tarea_nueva_texto = document.createElement("text");

    // la tarea nueva se puede borrar a si mismo
    tarea_nueva.addEventListener('change', removerTareaRealizada);

    tarea_nueva_checkbox.type = "checkbox";
    tarea_nueva_texto.textContent = input_tarea_nueva.value;

    // ensamblando tarea nueva
    tarea_nueva.appendChild(tarea_nueva_checkbox);
    tarea_nueva.appendChild(tarea_nueva_texto);

    /**
     * Agregar tarea a lista de tareas
     */
    lista_tareas.appendChild(tarea_nueva);

    /**
     * Dejando todo listo para proxima tarea.
     */
    input_tarea_nueva.value = "";
}

/**
 * Borra la tarea que lo invoca de la lista de
 * tareas.
 * @param {*} e 
 */
function removerTareaRealizada(e) { 
    
    let tarea_completada = e.target.parentElement;
    lista_tareas.removeChild(tarea_completada)

}