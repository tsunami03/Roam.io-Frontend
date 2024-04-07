import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Post from "./Post";
import PostDraft from "./PostDraft";

const Feed = () => {
  return (
    <>
      <Heading size="md" padding="10px">
        {" "}
        Home{" "}
      </Heading>
      <PostDraft />
      <Box borderRight="1px solid" borderColor="gray.200" h="100vh">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Box>
    </>
  );
};

export default Feed;
