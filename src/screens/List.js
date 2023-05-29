import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import md5 from "blueimp-md5";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { CardCharacter } from "../components/CardCharacter";
import { CharacterContext } from "../context/CharacterContext";
import { Searcher } from "../components/Searcher";
import { styles } from "../styles/theme";

export const List = () => {
  const [characters, setCharacters] = useState([]);
  const [res, setRes] = useState([]);
  const publicKey = "769f0ff0d12989ea1a9c349404cf1e93";
  const privateKey = "c206acb8915ea08e5bbaa73bd49c0e8d3a9d05df";
  const timestamp = Date.now();
  const hash = md5(timestamp + privateKey + publicKey).toString();
  const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

  const imgBackground =
    "https://i.pinimg.com/564x/46/0a/38/460a38fe5cf48622c86c84b51fefe8f0.jpg";


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


  if (characters.length <= 0) {
    return (

      <View style={styles.containers}>

        <ImageBackground
          source={{
            uri: imgBackground,
          }}
          style={styles.imgBackground}
          resizeMode="cover"
        >
          <Text style={styles.texts}>Cargando personajes...</Text>

        </ImageBackground>
      </View>
    );
  }
  return (
    <View style={styles.containers}>

      <ImageBackground
        source={{
          uri: imgBackground,
        }}
        style={styles.imgBackground}
        resizeMode="cover"
      >

        <CharacterContext.Provider
          value={{ characters, setCharacters, res, setRes }}
        >
          <Searcher />
          <CardCharacter />

        </CharacterContext.Provider>

      </ImageBackground>
      
    </View>
  );
};

//styles
