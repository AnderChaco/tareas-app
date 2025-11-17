import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Task from './components/Task';
import AddTaskModal from './components/AddTaskModal';
import ErrorBoundary, { ErrorDisplay } from './components/ErrorBoundary';
import { useTasks } from './hooks/useTasks';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  // Use custom hook for task management
  const {
    tasks,
    isLoading,
    error,
    isRefreshing,
    completedCount,
    totalCount,
    refreshTasks,
    addTask,
    toggleTask,
    deleteTask,
  } = useTasks();

  const handleAddTask = async (taskText) => {
    try {
      await addTask(taskText);
    } catch (err) {
      // Error is already handled in the hook
      console.error('Failed to add task:', err);
    }
  };

  const handleToggleTask = async (taskId) => {
    try {
      await toggleTask(taskId);
    } catch (err) {
      // Error is already handled in the hook
      console.error('Failed to toggle task:', err);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
    } catch (err) {
      // Error is already handled in the hook
      console.error('Failed to delete task:', err);
    }
  };

  return (
    <ErrorBoundary>
      <View style={styles.container}>
        <StatusBar style="dark" />
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <Text style={styles.taskCount}>
            {completedCount} of {totalCount} completed
          </Text>
        </View>

        {/* Error Display */}
        {error && (
          <ErrorDisplay error={error} onRetry={refreshTasks} />
        )}

        {/* Task List */}
        <View style={styles.tasksWrapper}>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#55BCF6" />
              <Text style={styles.loadingText}>Loading tasks...</Text>
            </View>
          ) : tasks.length === 0 && !error ? (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No tasks yet!</Text>
              <Text style={styles.emptySubtext}>Tap the button below to add your first task</Text>
            </View>
          ) : (
            <FlatList
              data={tasks}
              renderItem={({ item }) => (
                <Task
                  text={item.text}
                  completed={item.completed}
                  onToggle={() => handleToggleTask(item.id)}
                  onDelete={() => handleDeleteTask(item.id)}
                />
              )}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              style={styles.taskList}
              refreshControl={
                <RefreshControl
                  refreshing={isRefreshing}
                  onRefresh={refreshTasks}
                  tintColor="#55BCF6"
                />
              }
            />
          )}
        </View>

      {/* Add Task Button */}
      <View style={styles.addTaskButtonWrapper}>
        <TouchableOpacity 
          onPress={() => setIsModalVisible(true)} 
          style={styles.addTaskButton}
        >
          <Text style={styles.addTaskButtonText}>+ Add New Task</Text>
        </TouchableOpacity>
      </View>

      {/* Add Task Modal */}
      <AddTaskModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onAddTask={handleAddTask}
      />
      </View>
    </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  taskCount: {
    fontSize: 16,
    color: '#666',
  },
  tasksWrapper: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  taskList: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#999',
    marginBottom: 10,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  addTaskButtonWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#F8F9FA',
  },
  addTaskButton: {
    backgroundColor: '#55BCF6',
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  addTaskButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});
