import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Link, Image, Stack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Projects = () => {
  const ProjectTitle = {
    p1: "Web Portfolio",
    p2: "Software App Portoflio",
  };

  const ProjectDuration = {
    d1: "1 Week",
    d2: "2 Week",
    d3: "3 Week",
    d4: "1 Month",
  };

  const ProjectDifficulty = {
    D1: 1,
    D2: 2,
    D3: 3,
    D4: 4,
    D5: 5,
  };

  const ProjectWorker = {
    w1: 1,
    w2: 2,
    w3: 3,
    w4: 4,
    w5: 5,
  };
  return (
    <>
      <Stack
        minH={"100vh"}
        direction={"column"}
        align={"center"}
        alignItems={"center"}
        pt={"8rem"}
        overflow={"hidden"}
        pb={"8rem"}
      >
        <Stack
          direction={["column", "column", "row", "row", "row"]}
          gap={"28"}
          mx={"4rem"}
          align={"start"}
          justify={"center"}
        >
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={"public/gbl.jpg"} />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="orange">
                  New
                </Badge>
              </Box>

              <Link as={RouterLink} to={"/Project"}>
                <Box
                  pt="3"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                  color={"fg"}
                >
                  {ProjectTitle.p1}
                </Box>
              </Link>

              <Box color={"fg"}>
                {ProjectDuration.d3}
                <Box as="span" color="fg" fontSize="sm"></Box>
              </Box>

              <Box display="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={
                        i < ProjectDifficulty.D3 ? "secondary" : "gray.300"
                      }
                    />
                  ))}
                <Box as="span" ml="2" color="fg" fontSize="sm">
                  {ProjectWorker.w1} Worker
                </Box>
              </Box>
            </Box>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={"public/gbl.jpg"} />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="orange">
                  New
                </Badge>
              </Box>
              <Link>
                <Box
                  pt="3"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                  color={"fg"}
                >
                  {ProjectTitle.p2}
                </Box>
              </Link>

              <Box color={"fg"}>
                {ProjectDuration.d4}
                <Box as="span" color="gray.600" fontSize="sm"></Box>
              </Box>

              <Box display="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={
                        i < ProjectDifficulty.D4 ? "secondary" : "gray.300"
                      }
                    />
                  ))}
                <Box as="span" ml="2" color="fg" fontSize="sm">
                  {ProjectWorker.w1} Worker
                </Box>
              </Box>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={"public/gbl.jpg"} />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="orange">
                  New
                </Badge>
              </Box>
              <Link>
                <Box
                  pt="3"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                  color={"fg"}
                >
                  {ProjectTitle.p2}
                </Box>
              </Link>

              <Box color={"fg"}>
                {ProjectDuration.d4}
                <Box as="span" color="gray.600" fontSize="sm"></Box>
              </Box>

              <Box display="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={
                        i < ProjectDifficulty.D4 ? "secondary" : "gray.300"
                      }
                    />
                  ))}
                <Box as="span" ml="2" color="fg" fontSize="sm">
                  {ProjectWorker.w1} Worker
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Projects;
