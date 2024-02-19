import {
  Heading,
  Stack,
  Image,
  Flex,
  Link,
  Show,
  Hide,
  IconButton,
  //   Text,
  Button,

  // drawer
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import {
  FaBars,
  FaFolder,
  FaUser,
  // FaFolder,
  // FaImage,
  // FaEnvelope,
  // FaInstagram,
  // FaGithub,
  // FaLinkedinIn,
  // FaGoogleDrive,
} from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex pos={"fixed"} w={"full"} zIndex={10}>
      <Stack
        id={"navbar"}
        h={"4rem"}
        w={"full"}
        pos={"sticky"}
        top={0}
        left={0}
        // bgColor={"blue"}
        direction={"row"}
        px={["2rem", "2rem", "4rem", "4rem", "4rem"]}
        justify={"space-between"}
        align={"center"}
        textColor={"secondary"}
        backdropFilter={"blur(6px)"}
      >
        <Link
          as={RouterLink}
          to={"/"}
          id="site-title"
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{ textDecoration: "none" }}
          gap={"1rem"}
        >
          <Image src="/vite.svg" />
          <Heading size={"md"}>Orising</Heading>
        </Link>

        <Show above="md">
          <Stack id="menu" direction={"row"} gap={"3rem"} color={"secondary"}>
            <Link as={RouterLink} to={"/.."} fontWeight={"semibold"}>
              Home
            </Link>
            <Link as={RouterLink} to={"/projects"} fontWeight={"semibold"}>
              Projects
            </Link>
            <Link as={RouterLink} to={"/profile"} fontWeight={"semibold"}>
              About
            </Link>
          </Stack>
        </Show>

        {/* sm md lg xl 2xl */}
        <Hide above="md">
          <IconButton
            icon={<FaBars />}
            aria-label="menu-button"
            variant={"ghost"}
            color={"fg"}
            _hover={{
              color: "accent",
            }}
            onClick={onOpen}
          />

          <Drawer
            placement={"right"}
            onClose={onClose}
            isOpen={isOpen}
            size={"2rem"}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <Stack
                  justify={"center"}
                  align={"center"}
                  direction={"column"}
                  my={"4rem"}
                  color={"accent"}
                >
                  <Link as={RouterLink} to={"/"}>
                    <Image src="/vite.svg" h={"5rem"} />
                    <Heading size={"md"} my={"1rem"}>
                      {" "}
                      DJ RK MIX
                    </Heading>
                  </Link>

                  {/*Profile Menu*/}
                  <Link
                    as={RouterLink}
                    to={"/profile"}
                    w={"full"}
                    my={"0.5rem"}
                  >
                    <Button
                      variant={"ghost"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"start"}
                      gap={"0.5rem"}
                      leftIcon={<FaUser />}
                      size={"lg"}
                      w={"full"}
                      color={"accent"}
                    >
                      Profile
                    </Button>
                  </Link>
                  <Link
                    as={RouterLink}
                    to={"/projects"}
                    w={"full"}
                    my={"0.5rem"}
                  >
                    <Button
                      variant={"ghost"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"start"}
                      gap={"0.5rem"}
                      leftIcon={<FaFolder />}
                      size={"lg"}
                      w={"full"}
                      color={"accent"}
                    >
                      Project
                    </Button>
                  </Link>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Hide>
      </Stack>
    </Flex>
  );
};

export default Navbar;
