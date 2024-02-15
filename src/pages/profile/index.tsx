import {
  Stack,
  Avatar,
  Heading,
  Text,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Button,
  Box,
  // Card,
  // CardBody,
  // CardFooter,
  // CardHeader,
  // SimpleGrid,
} from "@chakra-ui/react";
import { MotionBox } from "@/components/chakra-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaEnvelope,
  // FaReact,
  // FaFigma,
  // FaGitAlt,
} from "react-icons/fa6";

// import { RiFlutterFill, RiJavascriptFill } from "react-icons/ri";
// import {
//   SiChakraui,
//   SiTypescript,
//   SiTailwindcss,
//   SiMysql,
// } from "react-icons/si";
// import { TbBrandReactNative } from "react-icons/tb";

const Profile = () => {
  return (
    <>
      <Stack
        minH={"200vh"}
        bgColor={"bg"}
        align={"start"}
        // justify={"center"}
        position="relative"
        direction={"column"}
        alignItems={"center"}
        pt={"8rem"}
        color={"fg"}
        textAlign={"center"}
        overflow={"hidden"}
      >
        <MotionBox
          mx={"5.7rem"}
          initial={{
            y: "100px",
            opacity: 0,
          }}
          animate={{
            y: "0px",
            opacity: 1,
          }}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <Avatar
            h={"12rem"}
            w={"12rem"}
            size={"2xl"}
            name="Aly"
            src="/IMG_20230214_202043_685.jpg"
            alignSelf={"center"}
          />
        </MotionBox>

        <MotionBox
          initial={{
            y: "100px",
            opacity: 0,
          }}
          animate={{
            y: "0px",
            opacity: 1,
          }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <Heading color={"fg"} my={"1rem"} alignSelf={"center"}>
            Daffa Aly Meganendra
          </Heading>
        </MotionBox>

        <MotionBox
          initial={{
            y: "100px",
            opacity: 0,
          }}
          whileInView={{
            y: "0px",
            opacity: 1,
          }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.5,
          }}
          viewport={{
            once: true,
          }}
        >
          <Text>
            Hello, call me Aly. Nice to meet you!
            <br /> Im a Computer Science student at Diponegoro University.{" "}
            <br /> This year is my second year in college. I'd like to learn a
            new thing. I had a lot things to be learn this year. <br /> Im a bit
            experienced on many things using current technology. There's a lot
            things i'd like to do in my free time. <br />I like to write in
            journal, but sometimes i read some books.
            <br /> For further details, ill try to elaborate it down below.
            <br />
            Here if you want to be connected with me!
          </Text>
        </MotionBox>
        <Stack direction={"row"}>
          <MotionBox
            initial={{
              y: "100px",
              opacity: 0,
            }}
            animate={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.75,
            }}
            viewport={{
              once: true,
            }}
          >
            <StatGroup>
              <Stat>
                <StatLabel>Online Hours</StatLabel>
                <StatNumber>15/7</StatNumber>
                <StatHelpText>
                  <StatArrow type="increase" />
                  73.36%
                </StatHelpText>
              </Stat>
            </StatGroup>
          </MotionBox>
        </Stack>

        <Stack
          direction={["column-reverse", "column-reverse", "row", "row", "row"]}
          w={"full"}
          align={["center", "center", "flex-end", "flex-end", "flex-end"]}
          justify={"space-evenly"}
          my={"2rem"}
          gap={"2rem"}
        >
          <MotionBox
            initial={{
              y: "100px",
              opacity: 0,
            }}
            whileInView={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.75,
            }}
            viewport={{
              once: true,
            }}
          >
            <Button
              leftIcon={<FaLinkedinIn />}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              gap={"0.5rem"}
              size={"lg"}
              w={"10rem"}
              color={"bg"}
              bgColor={"fg"}
              rounded={"full"}
            >
              LinkedIn
            </Button>
          </MotionBox>
          <MotionBox
            initial={{
              y: "100px",
              opacity: 0,
            }}
            whileInView={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1,
            }}
            viewport={{
              once: true,
            }}
          >
            <Button
              leftIcon={<FaInstagram />}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              gap={"0.25rem"}
              size={"lg"}
              w={"10rem"}
              color={"bg"}
              bgColor={"fg"}
              rounded={"full"}
            >
              Instagram
            </Button>
          </MotionBox>
          <MotionBox
            initial={{
              y: "100px",
              opacity: 0,
            }}
            whileInView={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.25,
            }}
            viewport={{
              once: true,
            }}
          >
            <Button
              leftIcon={<FaEnvelope />}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              gap={"1rem"}
              size={"lg"}
              w={"10rem"}
              color={"bg"}
              bgColor={"fg"}
              rounded={"full"}
            >
              Email
            </Button>
          </MotionBox>
          <MotionBox
            initial={{
              y: "100px",
              opacity: 0,
            }}
            whileInView={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.5,
            }}
            viewport={{
              once: true,
            }}
          >
            <Button
              leftIcon={<FaGithub />}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              gap={"0.75rem"}
              size={"lg"}
              w={"10rem"}
              color={"bg"}
              bgColor={"fg"}
              rounded={"full"}
            >
              Github
            </Button>
          </MotionBox>
          <MotionBox
            initial={{
              y: "100px",
              opacity: 0,
            }}
            whileInView={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.75,
            }}
            viewport={{
              once: true,
            }}
          >
            <Button
              leftIcon={<FaDiscord />}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              gap={"0.75rem"}
              size={"lg"}
              w={"10rem"}
              color={"bg"}
              bgColor={"fg"}
              rounded={"full"}
            >
              Discord
            </Button>
          </MotionBox>
        </Stack>
        <MotionBox
          initial={{
            y: "100px",
            opacity: 0,
          }}
          whileInView={{
            y: "0px",
            opacity: 1,
          }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.25,
          }}
          viewport={{
            once: true,
          }}
        >
          <Heading textAlign={"center"} fontSize={"24"} pt={"4rem"}>
            Skill
          </Heading>
        </MotionBox>

        <Stack
          direction={["column-reverse", "column-reverse", "row", "row", "row"]}
          w={"full"}
          align={["center", "center", "flex-end", "flex-end", "flex-end"]}
          justify={"space-evenly"}
          my={"2rem"}
          gap={"2rem"}
        >
          <MotionBox
            initial={{
              y: "100px",
              opacity: 0,
            }}
            whileInView={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.75,
            }}
            viewport={{
              once: true,
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              gap={"0.5rem"}
              boxSize={"lg"}
              w={"10rem"}
              h={"3.5rem"}
              color={"fg"}
              bgColor={"transparent"}
              rounded={"md"}
              borderWidth={"1px"}
              textAlign={"end"}
            >
              Figma
            </Box>
          </MotionBox>
          <MotionBox
            initial={{
              y: "100px",
              opacity: 0,
            }}
            whileInView={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1,
            }}
            viewport={{
              once: true,
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              gap={"0.95rem"}
              boxSize={"lg"}
              w={"10rem"}
              h={"3.5rem"}
              color={"fg"}
              bgColor={"transparent"}
              rounded={"md"}
            >
              React
            </Box>
          </MotionBox>
          <MotionBox
            initial={{
              y: "100px",
              opacity: 0,
            }}
            whileInView={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.25,
            }}
            viewport={{
              once: true,
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              gap={"1rem"}
              boxSize={"lg"}
              w={"10rem"}
              h={"3.5rem"}
              color={"fg"}
              bgColor={"transparent"}
              rounded={"md"}
            >
              Flutter
            </Box>
          </MotionBox>
          <MotionBox
            initial={{
              y: "100px",
              opacity: 0,
            }}
            whileInView={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.5,
            }}
            viewport={{
              once: true,
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              gap={"0.5rem"}
              boxSize={"lg"}
              w={"10rem"}
              h={"3.5rem"}
              color={"fg"}
              bgColor={"transparent"}
              rounded={"md"}
            >
              Javascript
            </Box>
          </MotionBox>
          <MotionBox
            initial={{
              y: "100px",
              opacity: 0,
            }}
            whileInView={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.75,
            }}
            viewport={{
              once: true,
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              gap={"0.25rem"}
              boxSize={"lg"}
              w={"10rem"}
              h={"3.5rem"}
              color={"fg"}
              bgColor={"transparent"}
              rounded={"md"}
            >
              Chakra UI
            </Box>
          </MotionBox>
        </Stack>
        <Stack
          direction={["column-reverse", "column-reverse", "row", "row", "row"]}
          w={"full"}
          align={["center", "center", "flex-end", "flex-end", "flex-end"]}
          justify={"space-evenly"}
          my={"2rem"}
          gap={"2rem"}
        >
          <MotionBox
            initial={{
              y: "100px",
              opacity: 0,
            }}
            whileInView={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 0.75,
            }}
            viewport={{
              once: true,
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              boxSize={"lg"}
              w={"10rem"}
              h={"3.5rem"}
              color={"fg"}
              bgColor={"transparent"}
              rounded={"md"}
            >
              ReactNative
            </Box>
          </MotionBox>
          <MotionBox
            initial={{
              y: "100px",
              opacity: 0,
            }}
            whileInView={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1,
            }}
            viewport={{
              once: true,
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              gap={"1.5rem"}
              boxSize={"lg"}
              w={"10rem"}
              h={"3.5rem"}
              color={"fg"}
              bgColor={"transparent"}
              rounded={"md"}
            >
              Git
            </Box>
          </MotionBox>
          <MotionBox
            initial={{
              y: "100px",
              opacity: 0,
            }}
            whileInView={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.25,
            }}
            viewport={{
              once: true,
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              boxSize={"lg"}
              w={"10rem"}
              h={"3.5rem"}
              color={"fg"}
              bgColor={"transparent"}
              rounded={"md"}
            >
              TailwindCSS
            </Box>
          </MotionBox>
          <MotionBox
            initial={{
              y: "100px",
              opacity: 0,
            }}
            whileInView={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.5,
            }}
            viewport={{
              once: true,
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              gap={"0.25rem"}
              boxSize={"lg"}
              w={"10rem"}
              h={"3.5rem"}
              color={"fg"}
              bgColor={"transparent"}
              rounded={"md"}
            >
              Typescript
            </Box>
          </MotionBox>
          <MotionBox
            initial={{
              y: "100px",
              opacity: 0,
            }}
            whileInView={{
              y: "0px",
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.75,
            }}
            viewport={{
              once: true,
            }}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"start"}
              gap={"0.75rem"}
              boxSize={"lg"}
              w={"10rem"}
              h={"3.5rem"}
              color={"fg"}
              bgColor={"transparent"}
              rounded={"md"}
            >
              MySQL
            </Box>
          </MotionBox>
        </Stack>
      </Stack>
    </>
  );
};

export default Profile;
