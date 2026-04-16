import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      {/* can register each screen here to give them options */}
      <Stack.Screen name="index"></Stack.Screen>
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
