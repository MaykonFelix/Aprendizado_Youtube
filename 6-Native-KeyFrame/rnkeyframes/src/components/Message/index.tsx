import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./styles";

export function Message() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="notifications" color="#FFF" size={18} />
      <Text style={styles.title}>Mensagem de Exemplo.</Text>
    </View>
  );
}
