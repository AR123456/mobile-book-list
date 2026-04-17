import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#ddd" },
        headerTintColor: "#333",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }}></Stack.Screen>
      <Stack.Screen name="about" options={{ title: "About" }}></Stack.Screen>
      <Stack.Screen
        name="contact"
        options={{ title: "Contact", headerShown: false }}
      ></Stack.Screen>
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
