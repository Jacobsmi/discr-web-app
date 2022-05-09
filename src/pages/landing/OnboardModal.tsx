import { useAuth0 } from "@auth0/auth0-react";
import { Modal } from "@chakra-ui/modal";
import {
  Button,
  chakra,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import onboardUser from "../../api/user/onboardUser";

interface FormData {
  firstName: string;
  lastName: string;
}

interface OnboardModalProps {
  isOpen: boolean;
  setIsOnboardModalShowing: (boolean: boolean) => void;
}

const OnboardModal = ({
  isOpen,
  setIsOnboardModalShowing,
}: OnboardModalProps) => {
  const { logout, getAccessTokenSilently } = useAuth0();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (formData: FormData) => {
    const token = await getAccessTokenSilently();
    await onboardUser(token, formData);
    setIsOnboardModalShowing(false);
  };

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
          <chakra.form
            onSubmit={handleSubmit(onSubmit)}
            id="signup-form"
            w={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            mt={5}
          >
            <FormControl w={"45%"} isInvalid={!!errors.firstName}>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                id="firstName"
                placeholder="John"
                {...register("firstName", {
                  required: true,
                  pattern: /^[A-Z,a-z ,.'-]+$/i,
                })}
              />
              {!!errors.firstName && (
                <FormHelperText>
                  Please enter a valid first name.
                </FormHelperText>
              )}
            </FormControl>
            <FormControl w={"45%"} isInvalid={!!errors.lastName}>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input
                id="lastName"
                placeholder="Doe"
                {...register("lastName", {
                  required: true,
                  pattern: /^[A-Z,a-z ,.'-]+$/i,
                })}
              />
              {!!errors.lastName && (
                <FormHelperText>Please enter a valid last name.</FormHelperText>
              )}
            </FormControl>
          </chakra.form>
        </ModalBody>

        <ModalFooter>
          <Button
            mr={3}
            backgroundColor={"#FF8C42"}
            type="submit"
            form="signup-form"
          >
            Sign Up
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default OnboardModal;
