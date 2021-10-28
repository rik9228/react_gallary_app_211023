import "./App.css";
import { ImgCard } from "./components/Molecules/ImgCard";
import { Text, Box, Grid } from "@chakra-ui/react";
import { UploadForm } from "./components/Molecules/UploadForm";
import { useFetchImage } from "./components/hooks/useFetchImage";
import { useDisclosure } from "@chakra-ui/react";
import { ErrorLabel } from "./components/Molecules/ErrorLabel";
import { useState } from "react";

function App() {
  const { imgInfos } = useFetchImage();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isError, setIsError] = useState(false);

  return (
    <div className="App">
      <Box p="5">
        <Text fontSize="5xl" as="h1">
          My Image Gallary
        </Text>
        {isError && <ErrorLabel setIsError={setIsError} />}
        <Box mt={5}>
          <UploadForm setIsError={setIsError} />
        </Box>

        <Grid
          maxW="1200px"
          mx="auto"
          mt={8}
          templateColumns="repeat(3, 1fr)"
          gap={8}
        >
          {imgInfos.map((imgInfo, index) => (
            <ImgCard
              imgInfo={imgInfo}
              key={index}
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
