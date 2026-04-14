// home page of app
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>The number 1</Text>
      <Text>Reading List App</Text>
    </View>
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
});
