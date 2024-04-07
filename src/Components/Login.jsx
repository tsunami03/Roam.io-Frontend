import {
  Box,
  Flex,
  Icon,
  Heading,
  Button,
  Text,
  Link,
  Center,
} from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import bg from "../assets/login-bg.avif";

function Login() {
  const redirectToGoogleSSO = () => {
    const url = `http://localhost:3000/auth/google`;
    const newWindow = window.open(url, "_self");
  };

  return (
    <Flex height="100vh">
      {/* Left half with teal background */}
      <Box
        flex="1"
        backgroundImage={bg}
        backgroundSize="cover"
        backgroundPosition="center"
      >
        {/* Content in left half */}
        <Flex alignItems="center" justifyContent="center" height="100%">
          <Box textAlign="center"></Box>
        </Flex>
      </Box>

      {/* Right half with login form */}
      <Box flex="1">
        {/* Content in right half */}
        <Flex alignItems="center" justifyContent="center" height="100%">
          <Box>
            <Heading size="lg" color="black" mt={4}>
              Welcome to Roam.io
            </Heading>
            <Text color="black" mt={4}>
              Embark on personalized adventures with authentic content creators!
            </Text>

            <Button
              mt={6}
              w="100%"
              variant="outline"
              leftIcon={<FcGoogle />}
              borderRadius="100px"
              onClick={redirectToGoogleSSO}
            >
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Login;
