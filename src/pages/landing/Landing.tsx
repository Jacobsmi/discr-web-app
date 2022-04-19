import { ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  chakra,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import LandingDrawer from "./LandingDrawer";
import FlyingDisc from "../../images/FlyingDisc.svg";

const Landing = () => {
  const [isLandingDrawerOpen, setIsLandingDrawerOpen] =
    useState<boolean>(false);

  const handleLandingDrawerClose = () => {
    setIsLandingDrawerOpen(false);
  };
  return (
    <Box w={"100vw"} h={"auto"}>
      <LandingDrawer
        isOpen={isLandingDrawerOpen}
        onClose={handleLandingDrawerClose}
      />
      <chakra.header
        maxW={"300px"}
        ml={"auto"}
        mr={"auto"}
        mt={"55px"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Text fontSize={"30px"} fontWeight={"bold"}>
          Discr
        </Text>
        <HamburgerIcon
          h={"26px"}
          w={"auto"}
          onClick={() => setIsLandingDrawerOpen(true)}
        />
      </chakra.header>
      <chakra.main
        maxW={"300px"}
        ml={"auto"}
        mr={"auto"}
        mt={"135px"}
        display={"flex"}
        flexDir={"column"}
      >
        <Image src={FlyingDisc} />
        <Text fontSize={"24px"} mt={"180px"}>
          Buy or Sell new or used disc golf equipment.
        </Text>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={"65px"}
        >
          <Button pl={2} backgroundColor={"#FF8C42"}>
            Get Started <ArrowForwardIcon />
          </Button>
          <LinkBox>
            <LinkOverlay>
              <Text as="u">Learn More</Text>
            </LinkOverlay>
          </LinkBox>
        </Box>
      </chakra.main>
    </Box>
  );
};
export default Landing;
