import { useContext } from "react";
import { View, Text, FlatList, StyleSheet, Image, Button } from "react-native";
import { CharacterContext } from "../context/CharacterContext";

export const CardCharacter = () => {
  const { characters, setCharacters } = useContext(CharacterContext);

  const deletedCharacter = (item) => {
    setCharacters(characters.filter((Element) => Element != item));
  };

  const renderItems = ({ item }) => {
    const thumbnail = item.thumbnail;
    const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;

    return (
      <View style={styles.viewCharacter}>
        <Text style={styles.text}>{item.name}</Text>

        <Image
          style={styles.imgCharacter}
          source={{
            uri: imageUrl,
          }}
        />

        <Button
          color={"red"}
          title="Elminar"
          onPress={() => deletedCharacter(item)}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList numColumns="2" data={characters} renderItem={renderItems} />
    </View>
  );
};

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
    backgroundColor: "#black",
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
  text: {
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
  },
});
