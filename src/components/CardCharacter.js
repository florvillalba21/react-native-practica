import { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { CharacterContext } from "../context/CharacterContext";
import { styles } from "../styles/theme";

export const CardCharacter = () => {

  const { characters, setCharacters } = useContext(CharacterContext);
  const { res, setRes } = useContext(CharacterContext);

  const deletedCharacter = (item) => {
    setCharacters(characters.filter((Element) => Element != item));
  };

  const renderItems = ({ item }) => {
    const thumbnail = item.thumbnail;
    const imageUrl = `${thumbnail.path}.${thumbnail.extension}`;

    return (
      
        <View style={styles.viewCharacter}>
          
          <Image
            style={styles.img}
            source={{
              uri: imageUrl,
            }}
          />

          <Text style={styles.texts}>{item.name}</Text>

          <Pressable
            style={styles.buttons}
            onPress={() => deletedCharacter(item)}
          >
            <Text style={styles.textButtons}>Eliminar</Text>

          </Pressable>
        </View>

    );
  };

  return (
    <View style={styles.containerList}>
      <FlatList
        numColumns={2}
        data={res.length > 0 ? res : characters}
        renderItem={renderItems}
      />
    </View>
  );
};
