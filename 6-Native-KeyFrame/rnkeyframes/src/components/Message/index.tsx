import { Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Animated, { Keyframe } from "react-native-reanimated";

import { styles } from "./styles";

export function Message() {
  const enteringKeyframe = new Keyframe({
    0: { opacity: 0, transform: [{ translateY: -100 }] },
    70: { opacity: 0.3 },
    100: { opacity: 1, transform: [{ translateY: 0 }] },
  });

  return (
    <Animated.View
      style={styles.container}
      entering={enteringKeyframe.duration(500)}
    >
      <MaterialIcons name="notifications" color="#FFF" size={18} />
      <Text style={styles.title}>Mensagem de Exemplo.</Text>
    </Animated.View>
  );
}
