import {
  Box,
  Text,
  VStack,
  Divider,
  Button,
  Icon,
  Flex,
} from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";
import React from "react";

const Sidebar = () => {
  return (
    <Box
      borderRight="1px solid"
      borderColor="gray.200"
      h="100vh"
      p="4"
      position="relative" // Ensure the parent has a position other than static
    >
      <VStack align="flex-start" spacing="4">
        <Button variant="unstyled" _hover={{ color: "blue.500" }}>
          <Flex alignItems="center">
            <Icon as={AiOutlineHome} fontSize="lg" mr="2" />
            <Text fontSize="lg">Home</Text>
          </Flex>
        </Button>
        <Button variant="unstyled" _hover={{ color: "blue.500" }}>
          <Flex alignItems="center">
            <Icon as={AiOutlineCompass} fontSize="lg" mr="2" />
            <Text fontSize="lg">Explore Destinations</Text>
          </Flex>
        </Button>
        <Button variant="unstyled" _hover={{ color: "blue.500" }}>
          <Flex alignItems="center">
            <Icon as={AiOutlineUser} fontSize="lg" mr="2" />
            <Text fontSize="lg">Profile</Text>
          </Flex>
        </Button>
        <Button variant="unstyled" _hover={{ color: "blue.500" }}>
          <Flex alignItems="center">
            <Icon as={AiOutlineSetting} fontSize="lg" mr="2" />
            <Text fontSize="lg">Settings</Text>
          </Flex>
        </Button>
        <Button variant="unstyled" _hover={{ color: "blue.500" }}>
          <Flex alignItems="center">
            <Icon as={AiOutlineLogout} fontSize="lg" mr="2" />
            <Text fontSize="lg">Logout</Text>
          </Flex>
        </Button>
        <Divider />
      </VStack>
      {/* Logout Button */}
    </Box>
  );
};

export default Sidebar;
