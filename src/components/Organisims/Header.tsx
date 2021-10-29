import { Button } from "@chakra-ui/button";
import { Box, Text, Flex } from "@chakra-ui/layout";

export const Header = () => {
  return (
    <Flex
      p={5}
      backgroundColor="teal"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontSize="2xl" as="h1" color="#fff">
        My Image Gallary
      </Text>
      <Button>ログイン</Button>
    </Flex>
  );
};
