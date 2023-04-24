import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const [characters, setCharacters] = useState([]);
  // opcional: consumir api o crear lista prop
  // mostrar en pantalla solo si se presiona en un boton

  const consumeApi = () => {
    fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=%27Normal%20Monster%27"
    )
      .then((resApi) => resApi.json())
      .then((res) => setCharacters(res.data.slice(0, 12)))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const image = "https://pbs.twimg.com/media/EWITy1SWAAAJCKF?format=jpg&name=medium"
  //funcion que elimina un character del estado character
  const deletedCharacter = (item) =>
    setCharacters(characters.toSpliced(item, 1));


  //funcion que renderiza los items
  const renderItems = ({ item }) => (

    <View style={styles.viewCharacter}>

      <Text>{item.name}</Text>

      <Image
        style={styles.imgCharacter}
        source={{
          uri: item.card_images[0].image_url,
        }}
      />

      <Button
        color={"#e2ac3f"}
        title="Elminar"
        onPress={() => deletedCharacter(item)}
      />

    </View>
  );


  //renderizado condicional
  if (characters.length > 0) {
    return (
      
      <View style={styles.container}>

          <ImageBackground source={image} style={styles.image}>

            <FlatList numColumns="2" data={characters} renderItem={renderItems} />

          </ImageBackground>
    
        <StatusBar style="auto" />

      </View>
    );
  }

  return (
    <View style={styles.container}>

      <ImageBackground source={image}  style={styles.image}>

        <Button
          style={{ with: 50 }}
          color={"#e2ac3f"}
          title="Mostrar lista"
          onPress={consumeApi}
        />
        
      </ImageBackground>

      <StatusBar style="auto" />

    </View>
  );
}

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#2a0308",
    alignItems: "center",
    justifyContent: "center",
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
    justifyContent: 'center',
    position: 'absolute',
    height: '100%',
    
  },
});
