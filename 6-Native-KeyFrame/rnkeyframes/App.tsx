import { View } from "react-native";
import { Message } from "./src/components/Message";

import { styles } from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Message />
    </View>
  );
}
