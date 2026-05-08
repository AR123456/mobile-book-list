import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";

// destructure children to use in template
const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  // getting this hook for appwrite expo router package - can redirect
  const router = useRouter();
};

export default UserOnly;
