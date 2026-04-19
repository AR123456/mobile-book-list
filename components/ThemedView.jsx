// custom light dark component
import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
// pass in destructured props and any additional with props with spread operator, children or nested content will get passed into the view component

const ThemedView = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme();
  // get themed object
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    // return array of styles
    <View styles={[{ backgroundColor: theme.background }, style]} {...props}>
      {children}
    </View>
  );
};

export default ThemedView;
