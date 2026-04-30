// custom light dark component
import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
// short cut way
const ThemedView = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme();
  // get themed object
  const theme = Colors[colorScheme] ?? Colors.light;
  if (!safe)
    return (
      // return array of styles
      <View style={[{ backgroundColor: theme.background }, style]} {...props} />
    );
  // what to return is we want safe mode safe = true
  return "a safe thing ";
};

export default ThemedView;
