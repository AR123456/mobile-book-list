import { StyleSheet, FlatList, Pressable } from "react-native";
import { useBooks } from "../../hooks/useBooks";
import { Colors } from "../../constants/Colors";

import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import ThemedCard from "../../components/ThemedCard";

const Books = () => {
  return (
    <ThemedView style={styles.container} safe={true}>
      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        Reading list
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
