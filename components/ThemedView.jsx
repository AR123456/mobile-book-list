// custom light dark component
import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
// react area safe area context is less janky than safe view
import { useSafeAreaInsets } from "react-native-safe-area-context";

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
  // useSafeAreaINsets hook
  const insets = useSafeAreaInsets();
  // what to return is we want safe mode safe = true
  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedView;
