import React, { useState } from "react";
import { Alert, KeyboardAvoidingView, 
  Platform, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View } from 'react-native';
import uuid from 'react-native-uuid';
import { getRealm } from '../databases/realm';

const InputTask = (props) => {
  const [task, setTask] = useState();
  const { handleRefresh } = props;

  const handleNewTask = async () => {
    const realm = await getRealm();

    try {
      realm.write(() => {
        realm.create("Task", {
          _id: uuid.v4().toString(),
          name: task,
          status: 'open',
        });
        Alert.alert("Concluído", "Tarefa salva com sucesso.");
      });
    } catch(e) {
      Alert.alert("Erro", "Não foi possível salvar a tarefa.");
      console.log("Erro ===> ",e);
    } finally {
      //realm.close();
    }
  }

  const handleAddTask = () => {
    if (!task) return;

    handleNewTask();
    setTask(null);
    handleRefresh();
  }
  return (
    <View style={styles.inputWrapper}>
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding": "height"}
          style={styles.writeTasksWrapper}
      >
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
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    flex: 1.35,
  },
  writeTasksWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
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