import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { useQuery } from "react-query";

import { useNavigate } from "react-router";
import getUser from "../../api/user/getUser";
import LoadingPage from "../../components/LoadingPage";

const Homepage = () => {
  const { logout, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  const { isLoading, error, data } = useQuery("user", async () => {
    const token = await getAccessTokenSilently();
    return getUser(token);
  });
  if (error) {
    logout();
    navigate("/");
  }
  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Box w={"100vw"} h={"auto"}>
          <Text>Homepage</Text>
          <Text>Welcome, {data?.data.user.firstName}</Text>
          <Button
            onClick={() => {
              logout();
              navigate("/");
            }}
          >
            Logout
          </Button>
        </Box>
      )}
    </>
  );
};
export default Homepage;
