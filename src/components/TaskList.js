import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Task from "./Task";


const TaskList = (props) => {
  const { items } = props;

  return (
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Tarefas do dia</Text>
      <View style={styles.items}>
        {
          items.map((item, index) => {
            return (
              <Task key={index} text={item} />
            )
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
});

export default TaskList;