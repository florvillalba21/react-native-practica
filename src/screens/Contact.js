import { View } from "react-native-web";
import { FormContact } from "../components/FormContact";
import { styles } from "../styles/theme";

export const Contact = () => {
  const imgBackground =
    "https://i.pinimg.com/564x/46/0a/38/460a38fe5cf48622c86c84b51fefe8f0.jpg";

  return (
    <View style={styles.containers}>
      <imgBackground
        source={{
          uri: imgBackground,
        }}
        style={styles.imgBackground}
      >
        <FormContact />
      </imgBackground>
    </View>
  );
};
