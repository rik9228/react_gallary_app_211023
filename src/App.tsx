import { useCallback, useState } from "react";
import "./App.css";
import { ImgCard } from "./components/Molecules/ImgCard";
import { Text, Button, Box, Flex } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { ImgInfos } from "./utils/ImgInfos";
import { FiUpload } from "react-icons/fi";

function App() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  // const modalOpen = useCallback((): void => {
  //   setIsOpen(true);
  // }, []);

  return (
    <div className="App">
      <Box p="5">
        <Text fontSize="5xl" as="h1">
          My Image Gallary
        </Text>
        <Button colorScheme="blue" mt={8} maxW={320} w="100%">
          Upload
          <Icon as={FiUpload} ml={2} />
        </Button>
        <Flex
          maxW="1200px"
          mx="auto"
          mt={8}
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {ImgInfos.map((info, index) => (
            <ImgCard info={info} key={index} />
          ))}
        </Flex>
      </Box>
    </div>
  );
}

export default App;
