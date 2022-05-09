import { useAuth0 } from "@auth0/auth0-react";
import { Modal } from "@chakra-ui/modal";
import {
  Box,
  Button,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

const OnboardModal = ({
  isOpen,
  setIsOnboardModalShowing,
}: {
  isOpen: boolean;
  setIsOnboardModalShowing: (boolean: boolean) => void;
}) => {
  const { logout } = useAuth0();
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        logout();
        setIsOnboardModalShowing(false);
      }}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Complete Sign Up</ModalHeader>
        <ModalCloseButton />
        <ModalBody display={"flex"} flexDir={"column"}>
          We just need a bit more info...
          <Box w={"100%"} display={"flex"} justifyContent={"space-between"}>
            <Input w={"45%"}></Input>
            <Input w={"45%"}></Input>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              logout();
              setIsOnboardModalShowing(false);
            }}
          >
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default OnboardModal;
