import { TextInput, useColorScheme, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

const ThemedTextInput = ({ style, ...props }) => {
  const colorScheme = (useColorScheme = useColorScheme());
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <TextInput
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        },
      ]}
    >
      <Text>ThemedTextInput</Text>
    </TextInput>
  );
};

export default ThemedTextInput;
