import React from "react";
import {
  Box,
  Flex,
  Textarea,
  Button,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import bg from "../assets/login-bg.avif";

const PostDraft = () => {
  return (
    <Box p="4" borderBottom="1px" borderColor="gray.200">
      {/* Close Button */}

      {/* Textarea for Post Content */}
      <Textarea placeholder="What's on your mind?" mb="2" />

      {/* Image Preview */}
      {/* Replace 'previewImageUrl' with the state holding the preview image URL */}
      {/* <Box mb="2">
        <Image src={bg} alt="Preview" maxH="200px" />
      </Box> */}

      {/* Button to Upload Image */}
      <Flex alignItems="center">
        <Button colorScheme="blue" mr="2">
          Upload Image
          {/* Replace 'handleImageUpload' with the function to handle image upload */}
          <input
            type="file"
            style={{ display: "none" }}
            //onChange={handleImageUpload}
          />
        </Button>
        <Button colorScheme="green">Post</Button>
      </Flex>
    </Box>
  );
};

export default PostDraft;
