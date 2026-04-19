// custom light dark component
import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedView = () => {
  const colorScheme = useColorScheme();
  // get themed object
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View>
      <Text>ThemedView</Text>
    </View>
  );
};

export default ThemedView;
