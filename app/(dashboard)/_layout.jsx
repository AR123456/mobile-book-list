import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme];
  return <Tabs screenOptions={{ headerShown: false }} />;
};

export default DashboardLayout;
