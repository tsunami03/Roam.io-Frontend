import { Box } from "@chakra-ui/react";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <Box
        borderRight="1px solid"
        borderColor="gray.200"
        h="100vh"
        // backgroundColor="plum"
      >
        Sidebar{" "}
      </Box>
    </div>
  );
};

export default Sidebar;
