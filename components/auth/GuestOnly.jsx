// similar to User ONly
import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";
import { Text } from "react-native";
import { useEffect } from "react";

const GuestOnly = ({ children }) => {
  // getter setter
  const { user, authChecked } = useUser();
  // ref the router
  const router = useRouter();
  // useEffect to return when we have a guest
  useEffect(() => {
    if (authChecked && user !== null) {
      router.replace("/profile");
    }
  }, [user, authChecked]);
  if (!authChecked || user) {
    return <Text>Loading</Text>;
  }
  return children;
};

export default GuestOnly;
