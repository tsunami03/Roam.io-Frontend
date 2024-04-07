import React from "react";
import Sidebar from "../Components/Sidebar";
import Feed from "../Components/Feed";
import Trending from "../Components/Trending";
import { Box, Flex, Heading } from "@chakra-ui/react";
import ProfileCard from "../Components/ProfileCard";
import bg from "../assets/login-bg.avif";
import Services from "../Components/Services";

const Profile = () => {
  return (
    <div>
      <Flex direction="row">
        <div style={{ flex: "2" }}>
          <Sidebar />
        </div>
        <div style={{ flex: "5" }}>
          <Flex direction="column">
            <ProfileCard
              dp={bg}
              name={"alex jones"}
              location={"mumbai"}
              bio={"foodie wanderer"}
            />
            <Feed />
          </Flex>
        </div>
        <div style={{ flex: "2" }}>
          <Services />
        </div>
      </Flex>
    </div>
  );
};

export default Profile;
