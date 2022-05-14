import { Box } from "@chakra-ui/layout";
import { CircularProgress } from "@chakra-ui/progress";

const LoadingPage = () => {
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress isIndeterminate />
    </Box>
  );
};
export default LoadingPage;
