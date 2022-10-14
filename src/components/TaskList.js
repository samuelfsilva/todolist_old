import React, { useEffect } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { getRealm } from "../databases/realm";

import Task from "./Task";

const TaskList = (props) => {
  const { items } = props;
  const { handleRefresh } = props;
  
  const fetchTasks = async() => {
    const realm = await getRealm();
    
    try {
      const response = realm.objects("Task").toJSON();
      setTasks(response);
    } finally {
      handleRefresh();
    }
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <View style={styles.tasksWrapper}>
      {
        items ?
        <FlatList
          data={items}
          renderItem={
            ({ item: task, index }) => <Task key={index} text={task?.name} />
          }
          keyExtractor={task => task.id}
        />
        : <Text>Nenhuma tarefa definida.</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  tasksWrapper: {
    flex: 8,
    paddingHorizontal: 20,
  },
  items: {
    
  },
});

export default TaskList;