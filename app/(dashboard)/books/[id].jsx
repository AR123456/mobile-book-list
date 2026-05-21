import { StyleSheet, Text, View } from "react-native";
// to get  dynamic part of a route -expo hook
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { useBooks } from "../../../hooks/useBooks";
// themed components
import ThemedText from "../../../components/ThemedText";
import ThemedView from "../../../components/ThemedView";
import ThemedCard from "../../../components/ThemedCard";
import ThemedButton from "../../../components/ThemedButton";
import Spacer from "../../../components/Spacer";
import ThemedLoader from "../../../components/ThemedCard";

const BookDetails = () => {
  // state for book
  const [book, setBook] = useState(null);
  // id route params avalible - getting id from what is in [] in file name
  const { id } = useLocalSearchParams();
  const { fetchBookById } = useBooks();
  useEffect(() => {
    async function loadBook() {
      const bookData = await fetchBookById(id);
      setBook(bookData);
    }
    loadBook();
  }, [id]);

  if (!book) {
    return (
      // this safe just keeps the view from being too far up the screen
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    );
  }
  return (
    // this safe just keeps the view from being too far up the screen
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        {/* invoke fetch by ID */}
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText style={styles.title}>Written by {book.author}</ThemedText>
        <Spacer />
        <ThemedText title={true}>Book description: </ThemedText>
        <Spacer height={10} />
        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20,
  },
});
