import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Contact = () => {
  return (
    <View>
      <Text>Contact Us </Text>
      <Link style={styles.link} href="/">
        Back to Home
      </Link>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
