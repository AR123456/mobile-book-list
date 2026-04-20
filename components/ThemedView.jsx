// custom light dark component
import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
// short cut way
const ThemedView = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  // get themed object
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    // return array of styles
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  );
};

export default ThemedView;
