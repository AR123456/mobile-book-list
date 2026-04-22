import { View, useColorScheme } from "react-native";
import { Color } from "../constants/Colors";

const ThemedText = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View>
      <Text>ThemedText</Text>
    </View>
  );
};

export default ThemedText;

const styles = StyleSheet.create({});
