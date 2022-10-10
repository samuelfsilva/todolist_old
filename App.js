import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import InputTask from './src/components/InputTask';
import TaskList from './src/components/TaskList';

export default function App() {
  const [taskItems, setTaskItems] = useState(['Tarefa 1', 'Tarefa 2']);
  return (
    <View style={styles.container}>
      <TaskList items={taskItems}/>
      <InputTask items={setTaskItems}/>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
});
