import { Box, HStack, VStack, Heading, Text, Image } from "@chakra-ui/react";
import { MdLocationOn, MdPostAdd } from "react-icons/md";
import React from "react";

const ProfileCard = ({ name, dp, location, bio }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p={4} borderBottom="1px" borderColor="gray.200">
        <HStack justify="space-between" align="center">
          <Heading size="md">{name}</Heading>
          <HStack spacing={1} alignItems="center">
            <MdPostAdd size={20} />
            <Text>10 posts</Text>
          </HStack>
        </HStack>
      </Box>
      <Box p={4} borderBottom="1px" borderColor="gray.200">
        <HStack alignItems="center">
          <Image src={dp} boxSize="200px" mr="2" />
          <VStack align="flex-start">
            <Text fontSize="sm">{bio}</Text>
            <HStack>
              <MdLocationOn />
              <Text>{location}</Text>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProfileCard;
