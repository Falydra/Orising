import {
  Heading,
  Stack,
  // Image,
  Text,
  Flex,
  Box,
  Card,
  CardBody,
  CardHeader,
  StackDivider,
  Divider,
} from "@chakra-ui/react";

import Banner from "@/components/banner";

const HomePage = () => {
  return (
    <>
      <Banner />
      /*
      <Flex
        id="Content"
        direction={"column"}
        justify={"start"}
        align={"center"}
        // color={"accent"}
        minH={"250vh"}
        my={["23rem", "12.1rem", "6rem", "6rem", "2rem"]}
        overflow={"hidden"}
      >
        <Stack
          direction={"row"}
          w={"full"}
          justify={"space-evenly"}
          align={"center"}
          textAlign={"center"}
          px={"8rem"}
        >
          <Divider orientation="horizontal" />
          <Box w={"64rem"}>
            <Heading
              size={"lg"}
              color={"secondary"}
              fontSize={"24"}
              textAlign={"center"}
              fontWeight={"thin"}
            >
              We're Leading You To Know Further About Me
            </Heading>
          </Box>
          <Divider orientation="horizontal" />
        </Stack>
        <Text
          size={"lg"}
          fontWeight={"extrabold"}
          color={"secondary"}
          textAlign={["center", "center", "start", "start", "start"]}
          my={"1rem"}
        >
          Recent projects
        </Text>
        <Stack
          minH={"30vh"}
          minW={"100vw"}
          my={"3rem"}
          direction={["column", "column", "row", "row", "row"]}
          px={"4rem"}
          py={"2rem"}
          divider={<StackDivider />}
          spacing={"4"}
          align={["center", "center", "start", "start", "start"]}
          textAlign={["center", "center", "start", "start", "start"]}
          overflow={"hidden"}
        >
          <Box
            bgColor={"fg"}
            boxSize={"19rem"}
            rounded={"2rem"}
            bgImage={"public/gbl.jpg"}
            bgSize={"cover"}
            overflow={"hidden"}
          ></Box>

          <Card
            bgColor={"transparent"}
            color={"fg"}
            overflow={"hidden"}
            borderWidth={0}
            boxShadow={"none"}
          >
            <CardHeader>
              <Heading size="md">Overview</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Title
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    View a summary of all your clients over the last month.
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Spesification
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Check out the overview of your clients.
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Duration
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    See a detailed analysis of all your business clients.
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
        <Stack
          minH={"30vh"}
          minW={"100vw"}
          my={"2rem"}
          direction={["column-reverse", "column-reverse", "row", "row", "row"]}
          px={"4rem"}
          py={"2rem"}
          spacing={"4"}
          divider={<StackDivider />}
          align={"center"}
          justify={["center", "center", "flex-end", "flex-end", "flex-end"]}
          textAlign={["center", "center", "end", "end", "end"]}
        >
          <Card
            bgColor={"bg"}
            color={"fg"}
            overflow={"hidden"}
            borderWidth={0}
            boxShadow={"none"}
          >
            <CardHeader>
              <Heading size="md">Overview</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Title
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    View a summary of all your clients over the last month.
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Spesification
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Check out the overview of your clients.
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Duration
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    See a detailed analysis of all your business clients.
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>

          <Box
            bgColor={"fg"}
            boxSize={"19rem"}
            rounded={"2rem"}
            bgImage={"public/Animecore.png"}
            bgSize={"cover"}
            overflow={"hidden"}
          ></Box>
        </Stack>
        <Stack
          minH={"30vh"}
          minW={"100vw"}
          my={"3rem"}
          direction={["column", "column", "row", "row", "row"]}
          px={"4rem"}
          py={"2rem"}
          divider={<StackDivider />}
          spacing={"4"}
          align={["center", "center", "start", "start", "start"]}
          textAlign={["center", "center", "start", "start", "start"]}
          overflow={"hidden"}
        >
          <Box
            bgColor={"fg"}
            boxSize={"19rem"}
            rounded={"2rem"}
            bgImage={"public/gbl.jpg"}
            bgSize={"cover"}
            overflow={"hidden"}
          ></Box>

          <Card
            bgColor={"transparent"}
            color={"fg"}
            overflow={"hidden"}
            borderWidth={0}
            boxShadow={"none"}
          >
            <CardHeader>
              <Heading size="md">Overview</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Title
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    View a summary of all your clients over the last month.
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Spesification
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Check out the overview of your clients.
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Duration
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    See a detailed analysis of all your business clients.
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
      </Flex>
    </>
  );
};

export default HomePage;
