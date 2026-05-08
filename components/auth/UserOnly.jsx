import { useUser } from "../../hooks/useUser";

// destructure children to use in template
const UserOnly = ({ children }) => {
  const { user, authChecked } = useUser();
};

export default UserOnly;
