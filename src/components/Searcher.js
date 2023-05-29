import { useContext, useEffect, useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { CharacterContext } from "../context/CharacterContext";

import Icon from "react-native-vector-icons/Feather";
import { styles } from "../styles/theme";

export const Searcher = () => {
  const { characters, setCharacters } = useContext(CharacterContext);
  const { res, setRes } = useContext(CharacterContext);
  const [text, setText] = useState();

  useEffect(() => {
    setRes(
      characters.filter((element) => element.name.toLowerCase().includes(text))
    );
  
  }, [text]);

  return (
    <View  style={styles.directionRow}>

      <View style={styles.iconContainer}>

        <Icon name="search" size={30} color="red" />

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


