import { StyleSheet, Text, View } from "react-native";

import Spacer from "../../../components/Spacer";
import ThemedText from "../../../components/ThemedText";
import ThemedView from "../../../components/ThemedView";
import ThemedCard from "../../../components/ThemedCard";
import ThemedButton from "../../../components/ThemedButton";

const [id] = () => {
  return (
    <View>
      <Text>[id]</Text>
    </View>
  );
};

export default [id];

const styles = StyleSheet.create({});
