import { useState, useEffect, useCallback } from 'react';
import { taskService } from '../services/taskService';

// Custom hook for task management with API integration
export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Load tasks from API
  const loadTasks = useCallback(async () => {
    try {
      setError(null);
      const tasksData = await taskService.getTasks();
      setTasks(tasksData);
    } catch (err) {
      setError(err.message);
      console.error('Error loading tasks:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Refresh tasks (for pull-to-refresh)
  const refreshTasks = useCallback(async () => {
    try {
      setIsRefreshing(true);
      setError(null);
      const tasksData = await taskService.getTasks();
      setTasks(tasksData);
    } catch (err) {
      setError(err.message);
      console.error('Error refreshing tasks:', err);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  // Add a new task
  const addTask = useCallback(async (taskText) => {
    try {
      setError(null);
      const newTask = await taskService.createTask(taskText);
      setTasks(prevTasks => [...prevTasks, newTask]);
      return newTask;
    } catch (err) {
      setError(err.message);
      console.error('Error adding task:', err);
      throw err;
    }
  }, []);

  // Toggle task completion
  const toggleTask = useCallback(async (taskId) => {
    try {
      setError(null);
      const taskToUpdate = tasks.find(task => task.id === taskId);
      if (!taskToUpdate) return;

      // Optimistic update
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      );

      // API call
      await taskService.toggleTask(taskToUpdate);
    } catch (err) {
      setError(err.message);
      console.error('Error toggling task:', err);
      
      // Revert optimistic update on error
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      );
      throw err;
    }
  }, [tasks]);

  // Delete a task
  const deleteTask = useCallback(async (taskId) => {
    try {
      setError(null);
      
      // Optimistic update
      const originalTasks = tasks;
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));

      // API call
      await taskService.deleteTask(taskId);
    } catch (err) {
      setError(err.message);
      console.error('Error deleting task:', err);
      
      // Revert optimistic update on error
      setTasks(originalTasks);
      throw err;
    }
  }, [tasks]);

  // Load tasks on mount
  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  // Computed values
  const completedCount = tasks.filter(task => task.completed).length;
  const totalCount = tasks.length;

  return {
    tasks,
    isLoading,
    error,
    isRefreshing,
    completedCount,
    totalCount,
    loadTasks,
    refreshTasks,
    addTask,
    toggleTask,
    deleteTask,
  };
};