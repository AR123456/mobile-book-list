//  book details - when the user taps the reading list item show this page
// get book details from the db
// have a way to get back to reading list
import { StyleSheet, Text, View } from "react-native";
import { useBooks } from "../../hooks/useBooks";
import { Colors } from "../../constants/Colors";

import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import ThemedCard from "../../components/ThemedCard";

const details = (item) => {
  const { item } = useBooks();
  console.log(item); //{"segment": "details"}
  try {
    <ThemedCard
      style={styles.card}
      data={books}
      keyExtractor={(item) => item.$id}
      contentContainerStyle={styles.list}
    >
      <ThemedText>Written by {item}</ThemedText>
    </ThemedCard>;
  } catch (error) {
    console.error(error);
  }
};

export default details;

const styles = StyleSheet.create({});
