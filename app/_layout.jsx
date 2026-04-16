import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }}></Stack.Screen>
      <Stack.Screen name="about" options={{ title: "About" }}></Stack.Screen>
      <Stack.Screen
        name="contact"
        options={{ title: "Contact" }}
      ></Stack.Screen>
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
