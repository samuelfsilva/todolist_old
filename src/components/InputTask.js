import React, { useState } from "react";
import { KeyboardAvoidingView, 
  Platform, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View } from 'react-native';

const InputTask = () => {
  const [task, setTask] = useState();

  const handleAddTask = () => {
    if (!task) return;

    //setTaskItems([...taskItems, task]);
    setTask(null);
  }
  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding": "height"}
        style={styles.writeTasksWrapper}>
          <TextInput 
            style={styles.input} 
            placeholder={'Escreva uma tarefa'}
            value={task}
            onChangeText={text => setTask(text)} />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  writeTasksWrapper: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  input: {
    paddingVertical: 15,
    paddingRight: 15,
    paddingLeft: 27,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {

  },
});

export default InputTask;