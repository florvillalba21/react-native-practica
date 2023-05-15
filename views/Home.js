import { useNavigation } from "@react-navigation/native";
import { View, Button, StyleSheet, Image, Text } from "react-native";

export default function Home() {
    const btn = {
        backgroundColor: "black",
        color: "white"
    }
  const img = "../public/img/Marvel-Comics-logo.png";
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.viewImage}>
        <Image
          style={styles.image}
          source={{
            uri: "https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.png",
          }}
        />
        <Text style={styles.text}>
            Pulse el boton para acceder a los personajes de Marvel
        </Text>
      </View>
      <View style={styles.btn}>
        <Button color={'black'} title="Ver lista" onPress={() => navigation.navigate("List")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewImage:{
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "black"
  },
  image: {
    width: "40%",
    resizeMode: "contain",
    position: "absolute",
    height: "40%",
    bottom: "75%"
  },
  btn:{
    justifyContent: "center",
    flexDirection: "row",
    bottom: "70%"
  },
  text:{
    top: "75%",
    color: "white",
    fontSize: 20
  }
});
