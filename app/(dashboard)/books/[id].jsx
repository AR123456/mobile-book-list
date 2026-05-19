import { StyleSheet, Text, View } from "react-native";

import Spacer from "../../../components/Spacer";
import ThemedText from "../../../components/ThemedText";
import ThemedView from "../../../components/ThemedView";
import ThemedCard from "../../../components/ThemedCard";
import ThemedButton from "../../../components/ThemedButton";

const BookDetails = () => {
  return (
    // this safe just keeps the view from being too far up the screen
    <ThemedView safe={true} style={styles.container}>
      <Text>BookDetails</Text>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({});
