import { View, useColorScheme } from "react-native";
import { Color } from "../constants/Colors";

const ThemedText = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  //
  const textColor = title ? theme.title : theme.text;
  return <Text style={[{ color: textColor }, style]} {...props} />;
};

export default ThemedText;

const styles = StyleSheet.create({});
