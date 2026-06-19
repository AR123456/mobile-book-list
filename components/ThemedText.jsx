import { Text, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
//  in title property set to default of fals
const ThemedText = ({ style, title = false, ...props }) => {
  // use hook to get users color scheme
  const colorScheme = useColorScheme();
  // return the theme based on users color scheme
  const theme = Colors[colorScheme] ?? Colors.light;
  // if true return title color from theme if false use theme text color
  const textColor = title ? theme.title : theme.text;
  return <Text style={[{ color: textColor }, style]} {...props} />;
};

export default ThemedText;
