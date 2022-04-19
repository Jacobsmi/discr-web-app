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
          <Box w={"90%"} p={2} borderBottom={"1px solid black"}>
            <Text>Login</Text>
          </Box>
          <Box w={"90%"} p={2} borderBottom={"1px solid black"}>
            <Text>Sign Up</Text>
          </Box>
          <LinkBox w={"90%"} p={2} borderBottom={"1px solid black"}>
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
