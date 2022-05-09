import { useAuth0 } from "@auth0/auth0-react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import React from "react";

const LandingDrawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { loginWithRedirect, user, logout } = useAuth0();
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement={"top"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          <Text fontSize={"30px"} fontWeight={"bold"}>
            Discr
          </Text>
        </DrawerHeader>
        <DrawerBody display={"flex"} flexDir={"column"} alignItems={"center"}>
          {user ? (
            <Box
              w={"90%"}
              p={2}
              borderBottom={"1px solid black"}
              _hover={{ backgroundColor: "grey" }}
              onClick={() => logout()}
            >
              Sign Out
            </Box>
          ) : (
            <>
              <Box
                w={"90%"}
                p={2}
                borderBottom={"1px solid black"}
                _hover={{ backgroundColor: "grey" }}
                onClick={async () => await loginWithRedirect()}
              >
                <Text>Login</Text>
              </Box>
              <Box
                w={"90%"}
                p={2}
                borderBottom={"1px solid black"}
                _hover={{ backgroundColor: "grey" }}
                onClick={async () =>
                  await loginWithRedirect({ screen_hint: "signup" })
                }
              >
                <Text>Sign Up</Text>
              </Box>
            </>
          )}
          <LinkBox
            w={"90%"}
            p={2}
            borderBottom={"1px solid black"}
            _hover={{ backgroundColor: "grey" }}
          >
            <LinkOverlay href="mailto:thediscrapp@gmail.com?subject=Contact%20Us">
              <Text>Contact Us</Text>
            </LinkOverlay>
          </LinkBox>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default LandingDrawer;
