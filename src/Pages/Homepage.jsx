import React from "react";
import { useState } from "react";
import { Heading, Flex } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Post from "../Components/Post";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Trending from "../Components/Trending";

const Homepage = () => {
  const [user, setUser] = useState("test");
  return (
    <div>
      <Flex direction="row">
        <div style={{ flex: "2" }}>
          <Sidebar />
        </div>
        <div style={{ flex: "5" }}>
          <Feed />
        </div>
        <div style={{ flex: "2" }}>
          <Trending />
        </div>
      </Flex>
    </div>
  );
};

export default Homepage;
