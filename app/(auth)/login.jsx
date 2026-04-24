import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
// themed components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";

const login = () => {
  return (
    <ThemedView style={styles.container}>
      <Text>login</Text>
    </ThemedView>
  );
};

export default login;

const styles = StyleSheet.create({});
