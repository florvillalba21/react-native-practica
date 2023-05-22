import { useNavigation } from "@react-navigation/native";
import { View, Button, StyleSheet, Image, Text, Pressable } from "react-native";

export default function Home() {
  const img =
    "https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.png";
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.viewImage}>
        <Image
          style={styles.image}
          source={{
            uri: img,
          }}
        />

        <Text style={styles.text}>
          Pulse el boton para acceder a los personajes de Marvel
        </Text>
      </View>
      <View style={styles.containerBtn}>

        <Pressable
          onPress={() => navigation.navigate("List")}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Presioname </Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewImage: {
    flexDirection: "row",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "black",
  },
  image: {
    width: "40%",
    resizeMode: "contain",
    position: "absolute",
    height: "40%",
    bottom: "75%",
  },
  containerBtn: {
    justifyContent: "center",
    flexDirection: "row",
    bottom: "70%",
  },
  btn: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
  
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    top: "75%",
    color: "white",
    fontSize: 20,
  },
});
