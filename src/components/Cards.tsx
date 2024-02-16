import { StarIcon } from "@chakra-ui/icons";
import {
  Text,
  Card,
  CardHeader,
  Stack,
  CardBody,
  StackDivider,
  Heading,
  CardFooter,
  Box,
} from "@chakra-ui/react";

const ProjectCard = () => {
  return (
    <Card variant="outline" bgColor={"transparent"} color={"fg"}>
      <CardHeader>
        <Stack align={"center"}>
          <Box
            bgImage={"public/gbl.jpg"}
            display={"flex"}
            boxSize={"12rem"}
            rounded={"2rem"}
            bgSize={"cover"}
            maxW={"sm"}
            borderWidth={"1px"}
          ></Box>
        </Stack>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing={"2"}>
          <Box bgImage={"public/gbl.jpg"}></Box>
          <Box>
            <Heading>Title</Heading>
            <Text pt={"2"} fontSize={"sm"}>
              Detailed information about the project
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        <Stack
          justify={"space-between"}
          direction={"row"}
          align={"center"}
          alignItems={"center"}
        >
          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon key={i} color={i < 3 ? "secondary" : "gray.300"} />
              ))}
          </Box>
          <Box display={"flex"} mt="2" ml={"20"} alignItems={"end"}>
            <Text>Difficulty</Text>
          </Box>
        </Stack>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
