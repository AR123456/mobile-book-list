// home page of app
import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import Logo from "../assets/img/logo_light.png";
// import the themed view components
import ThemedView from "../components/ThemedView";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <Image source={Logo} style={styles.img}></Image>
      <Text style={styles.title}>The number 1</Text>
      <Text style={{ marginTop: 10, marginBottom: 30 }}>Reading List App</Text>
      <Link style={styles.link} href="/about">
        About Page
      </Link>
      <Link style={styles.link} href="/contact">
        Contact Us
      </Link>
    </ThemedView>
  );
};

export default Home;
// style sheet object
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
  img: {
    marginVertical: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
