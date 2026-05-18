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

const details = (pressed) => {
  try {
    <Text>{pressed ? "Pressed!" : "Press Me"}</Text>;
  } catch (error) {
    console.error(error);
  }
  //   return (
  //     <View>
  //       <Text>details</Text>
  //     </View>
  //   );
};

export default details;

const styles = StyleSheet.create({});
