// Importa fs desde 'fs'; // Importamos el módulo del sistema de archivos de Node.js
import fs from 'fs/promises'; // Módulo para manejar rutas de archivos
import path from 'path';

import { fileURLToPath } from 'url'; // Para obtener la ruta del módulo actual
import { dirname } from 'path'; // Para obtener el directorio del módulo
import Tarea from '../models/tarea.mjs'; // Importamos el modelo Tarea
import TareasDataSource from './tareaDataSource.mjs';

// Obtener la ruta del archivo de tareas
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, 'tareas.json');

// Implementación concreta que extiende la interfaz TareasDataSource
export default class TareaRepository extends TareasDataSource {
  constructor() {
    super(); // Llama al constructor de la clase base
  }

  // Implementación del método obtenerTodas
  async obtenerTodas() {
    try {
      // Leer el archivo de texto en formato UTF-8
      const data = await fs.readFile(filePath, 'utf-8');
      // Convertir el contenido del archivo en un array de objetos JSON
      const tareas = JSON.parse(data);
      // Convertir cada tarea en una instancia de la clase Tarea
      return tareas.map(tarea => new Tarea(
        tarea.titulo,
        tarea.descripcion,
        tarea.completada
      ));
    } catch (error) {
      // Si no existe el archivo, devolvemos un array vacío
      if (error.code === 'ENOENT') {
        return [];
      }
      throw error;
    }
  }

  // Implementación del método guardar
  async guardar(tareas) {
    try {
      // Convertir el array de tareas a una cadena JSON con indentación de 2 espacios
      const data = JSON.stringify(tareas, null, 2);
      // Escribir la cadena JSON en el archivo de texto
      await fs.writeFile(filePath, data, 'utf-8');
    } catch (error) {
      // Si ocurre un error al guardar las tareas, mostramos el error
      console.error('Error al guardar las tareas:', error);
      throw error;
    }
  }

  // Implementación del método eliminar
  async eliminar(id) {
    try {
      const tareas = await this.obtenerTodas(); // Obtener todas las tareas existentes
      const tareasFiltradas = tareas.filter(tarea => tarea.id !== id); // Filtrar las tareas por id
      await this.guardar(tareasFiltradas); // Guardar la lista actualizada
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
      throw error;
    }
  }
}