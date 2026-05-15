import { StyleSheet } from "react-native";
import Spacer from "../../components/Spacer";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import { useBooks } from "../../hooks/useBooks";
const Books = ({ children }) => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        Reading list
        {response.documents}
      </ThemedText>
    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
