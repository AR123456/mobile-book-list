// custom light dark component
import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
// pass in destructured props
const ThemedView = ({ style }) => {
  const colorScheme = useColorScheme();
  // get themed object
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    // return array of styles
    <View styles={[{ backgroundColor: theme.background }, style]}></View>
  );
};

export default ThemedView;
