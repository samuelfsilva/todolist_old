import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import InputTask from './src/components/InputTask';
import TaskList from './src/components/TaskList';

import { getRealm } from './src/databases/realm';

export default function App() {
  const [ refresh, setRefresh ] = useState(true);
  const [ tasks, setTasks ] = useState([]);

  const fetchTasks = async() => {
    if (!refresh) return;

    const realm = await getRealm();
    
    try {
      const response = realm.objects("Task").toJSON();
      setTasks(response);
      console.log(tasks);
    } finally {
      setRefresh(false);
    }
  }

  useEffect(() => {
    fetchTasks();
  }, [refresh]);

  const activeRefresh = () => {
    setRefresh(true);
  }

  const desactiveRefresh = () => {
    setRefresh(false);
  }

  return (
    <View style={styles.containerApp}>
      <View style={styles.sectionTitle}>
        <Text style={styles.titleText}>Tarefas do dia</Text>
      </View>
      <TaskList items={tasks} handleRefresh={event => desactiveRefresh()}/>
      <InputTask handleRefresh={event => activeRefresh()}/>      
    </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: '#E8EAED',
    flexDirection: 'column',
  },
  sectionTitle: {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 20,
    marginVertical: 15,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
