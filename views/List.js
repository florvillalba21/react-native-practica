import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import md5 from "blueimp-md5";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { CardCharacter } from "../components/CardCharacter";
import { CharacterContext } from "../context/CharacterContext";
import { Searcher } from "../components/Searcher";

export const List = () => {
  const [characters, setCharacters] = useState([]);
  const publicKey = "769f0ff0d12989ea1a9c349404cf1e93";
  const privateKey = "c206acb8915ea08e5bbaa73bd49c0e8d3a9d05df";
  const timestamp = Date.now();
  const hash = md5(timestamp + privateKey + publicKey).toString();
  const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

  // opcional: consumir api o crear lista prop
  // mostrar en pantalla solo si se presiona en un boton

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        if (res.data) {
          setCharacters(res.data.data.results);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <View style={styles.container}>
      <CharacterContext.Provider value={{ characters, setCharacters }}>
        
        <CardCharacter />
      </CharacterContext.Provider>

      <StatusBar style="auto" />

    </View>
    </>
  );
};

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#2a0308",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  viewCharacter: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 20,
    backgroundColor: "#e2ac3f",
    // width: "50%",
  },
  imgCharacter: {
    resizeMode: "contain",
    width: 200,
    height: 300,
    margin: 10,
  },
  image: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    position: "absolute",
    height: "100%",
  },
});
