import "./App.css";
import { ImgCard } from "./components/Molecules/ImgCard";
import { Text, Box, Flex } from "@chakra-ui/react";
import { ImgInfos } from "./utils/ImgInfos";
import { UploadForm } from "./components/Molecules/UploadForm";

function App() {
  return (
    <div className="App">
      <Box p="5">
        <Text fontSize="5xl" as="h1">
          My Image Gallary
        </Text>
        <UploadForm />

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
