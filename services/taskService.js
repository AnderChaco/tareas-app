import { apiClient } from './apiClient';

// Data transformation utilities
const transformTaskFromAPI = (apiTask) => ({
  id: apiTask.id?.toString() || Date.now().toString(),
  text: apiTask.titulo || apiTask.descripcion || apiTask.text || 'Untitled Task',
  completed: apiTask.completada || apiTask.completed || false,
});

const transformTaskToAPI = (task) => ({
  id: task.id,
  titulo: task.text,
  completada: task.completed,
});

// Task API Service
export const taskService = {
  // Get all tasks
  async getTasks() {
    try {
      const response = await apiClient.get('/tareas');
      return response.map(transformTaskFromAPI);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
      throw new Error('Unable to load tasks from server');
    }
  },

  // Create a new task
  async createTask(taskText) {
    try {
      const newTask = {
        titulo: taskText,
        completada: false,
      };
      const response = await apiClient.post('/tareas', newTask);
      return transformTaskFromAPI(response);
    } catch (error) {
      console.error('Failed to create task:', error);
      throw new Error('Unable to create task');
    }
  },

  // Update a task
  async updateTask(taskId, updates) {
    try {
      const response = await apiClient.put(`/tareas/${taskId}`, updates);
      return transformTaskFromAPI(response);
    } catch (error) {
      console.error('Failed to update task:', error);
      throw new Error('Unable to update task');
    }
  },

  // Delete a task
  async deleteTask(taskId) {
    try {
      await apiClient.delete(`/tareas/${taskId}`);
      return true;
    } catch (error) {
      console.error('Failed to delete task:', error);
      throw new Error('Unable to delete task');
    }
  },

  // Toggle task completion
  async toggleTask(task) {
    return this.updateTask(task.id, {
      ...transformTaskToAPI(task),
      completada: !task.completed,
    });
  },
};