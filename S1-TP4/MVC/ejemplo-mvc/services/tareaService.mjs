// Importa la capa de persistencia (repositorio)
import TareaRepository from '../repository/tareaRepository.mjs';
import Tarea from '../models/tarea.mjs'; // Importa el modelo de Tarea

// Instancia el repositorio para manejar las tareas.
const tareaRepository = new TareaRepository();

// Servicio para obtener todas las tareas
export function listarTareas() {
  // Obtiene todas las tareas desde la capa de persistencia
  const tareas = tareaRepository.obtenerTodas();
  return tareas.map(tarea => new Tarea(tarea));
}

// Servicio para obtener solo las tareas completadas
export function listarTareasCompletadas() {
  // Obtiene todas las tareas desde la capa de persistencia
  const tareas = tareaRepository.obtenerTodas();
  return tareas.filter(tarea => tarea.completada).map(tarea => new Tarea(tarea));
}

// Servicio para agregar una nueva tarea
export function crearTarea(titulo, descripcion, completada = false) {
  // Crea una nueva instancia del modelo Tarea
  const nuevaTarea = new Tarea(titulo, descripcion, completada);
  // Guarda la nueva tarea en la base de datos
  tareaRepository.guardar(nuevaTarea);
  // Devuelve la tarea recién creada
  return nuevaTarea;
}

// Servicio para marcar una tarea como completada
export function completarTarea(id) {
  // Obtiene todas las tareas
  let tareas = tareaRepository.obtenerTodas();
  // Encuentra la tarea con el ID dado
  let tarea = tareas.find(tarea => tarea.id === id);
  // Si la tarea existe, la marca como completada
  if (tarea) {
    tarea.completada = true;
    // Guarda los cambios en el archivo
    tareaRepository.guardar(tarea);
  }
}

// Servicio para eliminar una tarea
export function eliminarTarea(id) {
  // Obtiene todas las tareas
  let tareas = tareaRepository.obtenerTodas();
  // Encuentra la tarea con el ID dado
  tareas = tareas.filter(tarea => tarea.id !== id);
  // Guarda la lista actualizada de tareas
  tareaRepository.guardar(tareas);
}