import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Task from './components/Task';
import AddTaskModal from './components/AddTaskModal';

export default function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddTask = (taskText) => {
    const newTask = {
      id: Date.now().toString(),
      text: taskText,
      completed: false,
    };
    setTaskItems([...taskItems, newTask]);
  };

  const toggleTask = (id) => {
    setTaskItems(taskItems.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteTask = (id) => {
    setTaskItems(taskItems.filter(item => item.id !== id));
  };

  const completedCount = taskItems.filter(item => item.completed).length;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <Text style={styles.taskCount}>
          {completedCount} of {taskItems.length} completed
        </Text>
      </View>

      {/* Task List */}
      <View style={styles.tasksWrapper}>
        <FlatList
          data={taskItems}
          renderItem={({ item }) => (
            <Task
              text={item.text}
              completed={item.completed}
              onToggle={() => toggleTask(item.id)}
              onDelete={() => deleteTask(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          style={styles.taskList}
        />
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
  addTaskButtonWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#F8F9FA',
    marginBottom: 40
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
