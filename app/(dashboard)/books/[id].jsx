import { StyleSheet, Text, View } from "react-native";
// to get  dynamic part of a route -expo hook
import { useLocalSearchParams } from "expo-router";
// themed components
import ThemedText from "../../../components/ThemedText";
import ThemedView from "../../../components/ThemedView";
import ThemedCard from "../../../components/ThemedCard";
import ThemedButton from "../../../components/ThemedButton";

const BookDetails = () => {
  // id route params avalible - getting id from what is in [] in file name
  const { id } = useLocalSearchParams();
  return (
    // this safe just keeps the view from being too far up the screen
    <ThemedView safe={true} style={styles.container}>
      <ThemedText>BookDetails- {id}</ThemedText>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
});
