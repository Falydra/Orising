import {
  Avatar,
  Button,
  Heading,
  Stack,
  Wrap,
  WrapItem,
  Text,
  // ChakraProvider,
} from "@chakra-ui/react";
import useSound from "@/hooks/useSound";

// import { useThemeContext } from "@/hooks/useTheme";
// import React from "react";
// import { toggleTheme } from "@/main";

// import { getToken } from "@/api";
// import { useState } from "react";

const Banner = () => {
  const [isPlayingBlow, toggleBlow] = useSound(
    "sound/y2mate.com - Beethoven  Moonlight Sonata 1st Movement.mp3"
  );
  const [isPlayingKam, toggleKam] = useSound(
    "sound/y2mate.com - Tchaikovsky  Swan Lake Op 20 Act II No 10 Scene.mp3"
  );

  // const { toggleTheme } = useThemeContext(); // Use the custom hook

  // const handleToggleTheme = (theme) => {
  //   toggleTheme(theme);
  // };

  return (
    <Stack
      id={"hero"}
      minH={"70vh"}
      // bgGradient={"linear(to-b, secondary, accent)"}
      bgImage={"public/wallpaperflare.jpg"}
      bgSize={"cover"}
      direction={["column-reverse", "column-reverse", "row", "row", "row"]}
      p={"4rem"}
      pt={"6rem"}
      zIndex={3}
    >
      {/* text */}
      <Stack
        flex={1}
        justify={"center"}
        align={["center", "center", "start", "start", "start"]}
        color={"white"}
        textAlign={["center", "center", "start", "start", "start"]}
      >
        {/* text */}
        <Heading
          size={"lg"}
          fontWeight={"bold"}
          color={"bg"}
          textShadow={"0 0 20px rgba(0,0,0,0.5)"}
        >
          Hello, <br />
          Welcome to Oriesy House
        </Heading>
        {/* text */}
        <Text
          fontWeight={"extrathin"}
          color={"bg"}
          textShadow={"0 0 20px rgba(0,0,0,0.5)"}
        >
          Call me Aly. Im a Generalist who loves to think. <br />
          You wonder on what things i can do as a<br />
          generalist? You’ll get to know me further here.
        </Text>

        <Stack
          direction={["column-reverse", "column-reverse", "row", "row", "row"]}
          my={"2rem"}
          gap={"2rem"}
        >
          <Button
            size={"lg"}
            w={"12rem"}
            rounded={"full"}
            color={"accent"}
            fontWeight={"semibold"}
            textAlign={"center"}
            onClick={toggleKam}
            textColor={"bg"}
          >
            Swan Lake
          </Button>
          <Button
            size={"lg"}
            w={"12rem"}
            rounded={"full"}
            color={"accent"}
            fontWeight={"semibold"}
            textAlign={"center"}
            onClick={toggleBlow}
            textColor={"bg"}
          >
            Moonlight
          </Button>
        </Stack>
      </Stack>

      {/* image */}
      <Stack
        flex={1}
        justify={"center"}
        align={["center", "center", "end", "end", "end"]}
      >
        <Wrap mx={"2rem"}>
          <WrapItem>
            <Avatar
              h={"12rem"}
              w={"12rem"}
              size={"2xl"}
              name="Aly"
              src="/IMG_20230214_202043_685.jpg"
            />{" "}
          </WrapItem>
        </Wrap>
      </Stack>
      {
        // <video
        //   autoPlay
        //   loop
        //   playsInline
        //   muted
        //   style={{
        //     top: 0,
        //     left: 0,
        //     position: "absolute",
        //     width: "100vw",
        //     height: "23.8%",
        //     objectFit: "cover",
        //     zIndex: -1,
        //     opacity: "100%",
        //   }}
        // >
        //   <source
        //     src="/howl-and-sophie-in-the-flower-field-howls-moving-castle-moewalls-com.mp4"
        //     type="video/mp4"
        //   />
        // </video>
      }
    </Stack>
  );
};

export default Banner;
