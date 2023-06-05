import { useNavigation } from "@react-navigation/native";
import {
  View,
  Image,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { styles } from "../styles/theme";


export default function Home() {

  const imgBackground =
    "https://i.pinimg.com/564x/46/0a/38/460a38fe5cf48622c86c84b51fefe8f0.jpg";
  const imgLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png";

  const navigation = useNavigation();


  return (
    <View style={styles.containers}>

      <ImageBackground
        source={{
          uri: imgBackground,
        }}
        style={styles.imgBackground}
      >
        
        <Image
            source={{
              uri: imgLogo,
            }}
            style={styles.logo}
          />

        <View style={styles.msgHome}>

          <View>

            <Pressable
              onPress={() => navigation.navigate("List")}
              style={styles.buttonHome}
            >
              <Text style={styles.textButtons}>Ver personajes</Text>

            </Pressable>
            <Pressable
              onPress={() => navigation.navigate("Contact")}
              style={styles.buttonHome}
            >
              <Text style={styles.textButtons}>Contactame</Text>

            </Pressable>

          </View>

        </View>

      </ImageBackground>

    </View>
  );
}
