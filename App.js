import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [nota, setNota] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    setList([...list, nota]);
  };

  return (
    <View style={styles.container}>
      <Text>
        Ingresa alguna tarea
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe la nueva tarea"
        onChangeText={setNota}
      />
      <Button 
        color="#493443"
        style={styles.btn}
        onPress={addTask} 
        title="Agregar tarea" />

      <View style={{flexDirection: 'row'}}>
       
      {
        list.map((task, i) => (
          <View key={i} style={styles.viewTask}>
            <Text style={styles.text}>
              Tarea N° {i}
               {task}
            </Text>

            <Button
                onPress={() => setList(() => list.toSpliced(i, 1))}
                title="Eliminar"
                color="#493443"
                style={styles.btn}
              />
          </View>
        ))
      }
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0e2be",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    color: "black",
    backgroundColor: "white",
    padding: "10px",
    width: "50%",
    borderColor: "#619177",
    margin: "10px",
    borderWidth: '1px',
    borderRadius: '10px'

  },
  btn: {
    margin: "5px",
    marginLeft: "10px",
  },
  text :{
    margin: "20px",
    borderBottomColor: "red",
  },
  viewTask:{
    backgroundColor: '#fff',
    borderWidth: '1px',
    borderColor: '#619177',
    margin: '20px',
    padding: '10px',
    borderRadius: '10px',
    
  }
  
});
