import { useContext, useEffect, useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { CharacterContext } from "../context/CharacterContext";

import Icon from "react-native-vector-icons/Feather";

export const Searcher = () => {
  const { characters, setCharacters } = useContext(CharacterContext);
  const { res, setRes } = useContext(CharacterContext);
  const [text, setText] = useState();

  useEffect(() => {
    setRes(
      characters.filter((element) => element.name.toLowerCase().includes(text))
    );
    console.log(res);
  }, [text]);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="search" size={40} color="red" />
      </View>

      <TextInput
        style={styles.inputSearch}
        placeholder="Buscar un personaje"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 70,
  },
  inputSearch: {
    textAlign: "center",
    flexDirection: "column",
    backgroundColor: "#f9f9f9",
    height: 50,
    width: 400,
    borderRadius: 10,
  },
  button: {
    flexDirection: "column",
    marginTop: 4,
    width: 40,
    height: 40,
    backgroundColor: "red",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    marginTop: 4,
    width: 40,
    height: 40,
  },
});
