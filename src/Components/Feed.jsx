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

      <Box
        overflowY="auto"
        height="calc(100vh - 50px)"
        borderRight="1px solid"
        borderColor="gray.200"
        h="100vh"
        sx={{ "::-webkit-scrollbar": { display: "none" } }}
        msx={{ "&::-webkit-scrollbar": { display: "none" } }}
      >
        <PostDraft />
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
