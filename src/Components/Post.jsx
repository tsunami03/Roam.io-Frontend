import React from "react";
import { Box, Flex, Image, Text, IconButton } from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import bg from "../assets/login-bg.avif";

const Post = () => {
  return (
    <>
      <Box p="4" borderBottom="1px" borderColor="gray.200">
        {/* User Info */}
        <Flex alignItems="center" mb="2">
          <Image src={bg} borderRadius="full" boxSize="40px" mr="2" />
          <Text fontWeight="bold">Username</Text>
        </Flex>

        {/* Post Content */}
        <Text mb="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi.
        </Text>

        {/* Posted Photo */}
        <Image src={bg} borderRadius="md" mb="4" />

        {/* Like Button */}
        <Flex alignItems="center">
          <IconButton icon={<AiOutlineHeart />} aria-label="Like" mr="2" />
          <Text mr="2">15</Text>
          <IconButton icon={<AiOutlineComment />} aria-label="Comment" />
        </Flex>
      </Box>
    </>
  );
};

export default Post;
