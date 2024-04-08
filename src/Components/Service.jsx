import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { FaDollarSign } from "react-icons/fa";

const Service = ({ serviceName, price }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      maxWidth="300px"
      boxShadow="md"
    >
      <Flex align="center" mb={2}>
        <FaDollarSign size={20} mr={2} />
        <Text fontWeight="bold">{price}</Text>
      </Flex>
      <Text fontSize="lg" mb={2}>
        {serviceName}
      </Text>
      {/* Add additional details or actions if needed */}
    </Box>
  );
};

export default Service;
