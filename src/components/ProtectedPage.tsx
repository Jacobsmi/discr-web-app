import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

const ProtectedPage = ({ children }: { children: any }) => {
  const { user, error, isLoading } = useAuth0();
  const navigate = useNavigate();
  if (!isLoading && !error && !user) {
    navigate("/");
  }
  return <>{children}</>;
};
export default ProtectedPage;
