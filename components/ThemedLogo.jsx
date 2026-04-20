import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
const ThemedLogo = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  // get themed object
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View>
      <Text>ThemedLogo</Text>
    </View>
  );
};

export default ThemedLogo;

const styles = StyleSheet.create({});
