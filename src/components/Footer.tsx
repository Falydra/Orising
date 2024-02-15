import { Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Stack
      minH={"10vh"}
      bgColor={"secondary"}
      zIndex={4}
      align={"end"}
      direction={"column"}
      alignSelf={"center"}
      justify={"flex-end"}
    >
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam
        similique, excepturi minima eaque autem ullam quos esse! Unde quas
        sapiente iste quae consectetur sequi tenetur, modi dolorem esse ad!
      </Text>
    </Stack>
  );
};

export default Footer;
