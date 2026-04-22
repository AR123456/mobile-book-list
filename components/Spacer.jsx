import { View } from "react-native";

// passing in w and h default props
const Spacer = ({ width = "100%", height = 40 }) => {
  // auto close to automatically render children
  return <View style={{ width, height }} />;
};

export default Spacer;
