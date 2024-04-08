import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Trending = () => {
  return (
    <Box h="100vh">
      <Flex w={"100%"} p={4} borderRadius={8} gap={8} flexDir={"column"}>
        <Heading as={"h1"} fontSize={"2xl"} fontWeight={700}>
          {"Trending Hashtags"}
        </Heading>
        <VStack alignItems={"start"} gap={0}>
          <Heading
            as={"h2"}
            fontSize={"lg"}
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            pt={4}
          >
            #NitrogenIceCream
          </Heading>
          <Heading
            as={"h2"}
            fontSize={"lg"}
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            pt={4}
          >
            #TrekkingForTheSunrise
          </Heading>
          <Heading
            as={"h2"}
            fontSize={"lg"}
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            pt={4}
          >
            #DancingUnderTheStars
          </Heading>
          <Heading
            as={"h2"}
            fontSize={"lg"}
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
            pt={4}
          >
            #abcxyz
          </Heading>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Trending;
