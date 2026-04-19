// custom light dark component
import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
// pass in destructured props and any additional with props with spread operator
const ThemedView = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  // get themed object
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    // return array of styles
    <View
      styles={[{ backgroundColor: theme.background }, style]}
      {...props}
    ></View>
  );
};

export default ThemedView;
