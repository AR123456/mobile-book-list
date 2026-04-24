import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
// themed components
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";

const login = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Login to Your Account
      </ThemedText>
      {/* link to register page  */}
      <Spacer height={100} />
      <Link href="/register">Register</Link>
    </ThemedView>
  );
};

export default login;

const styles = StyleSheet.create({});
