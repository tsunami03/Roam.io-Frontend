import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Input,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import {
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineSend,
} from "react-icons/ai";
import bg from "../assets/login-bg.avif";
import { MdLocationOn, MdOutlineLocationOn, MdPostAdd } from "react-icons/md";

const Comment = () => {
  return (
    <Box
      p="1"
      borderBottom="1px"
      borderLeft="1px"
      borderRadius={4}
      borderColor="gray.200"
    >
      {/* Replace the following with your comment logic */}
      <Flex alignItems="center" mb="2">
        <Image src={bg} borderRadius="full" boxSize="20px" mr="2" />
        <Text fontWeight="bold">Username</Text>
        <Text ml="2">Comment 1</Text>
      </Flex>
    </Box>
  );
};

const CommentsSection = () => {
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    // Add logic to handle adding new comment (e.g., API call)
    console.log("Adding comment:", newComment);
    // Reset the input field after adding comment
    setNewComment("");
  };

  return (
    <>
      <Flex mb="2">
        <Input
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
          mr="2"
        />
        <IconButton
          icon={<AiOutlineSend />}
          aria-label="Send"
          onClick={handleAddComment}
        />
      </Flex>
      <Comment />
      <Comment />
      <Comment />
    </>
  );
};

const Post = () => {
  const [showComments, setShowComments] = useState(false);
  return (
    <>
      <Box p="4" borderBottom="1px" borderColor="gray.200" position="relative">
        {/* Location Item */}
        <Box position="absolute" mt="25px" mr="10px" top="1" right="1">
          <HStack>
            <MdLocationOn />
            <Text fontSize="sm">Location</Text>
          </HStack>
        </Box>

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
          <IconButton
            icon={<AiOutlineComment />}
            aria-label="Comment"
            onClick={() => {
              setShowComments(!showComments);
            }}
          />
          <Text ml="2">10</Text>
        </Flex>
      </Box>
      {showComments && <CommentsSection />}
    </>
  );
};

export default Post;
