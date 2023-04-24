import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [characters, setCharacters] = useState([]);
  // opcional: consumir api o crear lista prop
  // mostrar en pantalla solo si se presiona en un boton

  const consumerApi = () => {
    fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?type=%27Normal%20Monster%27"
    )
      .then((resApi) => resApi.json())
      .then((res) => setCharacters(res.data.slice(0, 12)))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  if (characters.length > 0) {
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            numColumns="2"
            data={characters}
            renderItem={({ item }) => (
              <View style={styles.viewCharacter}>
                <Text>{item.name}</Text>

                <Image
                  style={styles.imgCharacter}
                  source={{
                    uri: item.card_images[0].image_url,
                  }}
                />
              </View>
            )}
          />
        </View>

        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button
        style={styles.btn}
        color={"#e2ac3f"}
        title="Mostrar lista"
        onPress={consumerApi}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a0308",
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
});
