import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = ({ text, completed, onToggle, onDelete }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        style={[styles.square, completed && styles.completed]}
        onPress={onToggle}
      >
        {completed && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
      
      <Text style={[styles.itemText, completed && styles.completedText]}>
        {text}
      </Text>
      
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteText}>×</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    borderRadius: 5,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completed: {
    backgroundColor: '#4CAF50',
  },
  checkmark: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  deleteButton: {
    backgroundColor: '#FF6B6B',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Task;