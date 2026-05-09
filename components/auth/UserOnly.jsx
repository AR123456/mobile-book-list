import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";

// destructure children to use in template
const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser();
  // getting this hook for appwrite expo router package - can redirect
  const router = useRouter();
  useEffect(() => {
    if (authChecked && user == null) {
      // no user so re direct, replace removes prior screen from history stack so users back button will not navigate back
      router.replace("./login");
    }
  }, [user, authChecked]);
};

export default UserOnly;
