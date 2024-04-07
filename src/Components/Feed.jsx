import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Post from "./Post";
import PostDraft from "./PostDraft";
import bg from "../assets/login-bg.avif";

const Feed = ({ withDraft }) => {
  return (
    <>
      <Box
        overflowY="auto"
        height="calc(100vh - 50px)"
        borderRight="1px solid"
        borderColor="gray.200"
        h="100vh"
        sx={{ "::-webkit-scrollbar": { display: "none" } }}
        msx={{ "&::-webkit-scrollbar": { display: "none" } }}
      >
        {withDraft && <PostDraft />}
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
