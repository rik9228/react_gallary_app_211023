import "./App.css";
import { ImgCard } from "./components/Molecules/ImgCard";
import { Text, Box, Grid } from "@chakra-ui/react";
import { UploadForm } from "./components/Molecules/UploadForm";
import { useFetchImage } from "./components/hooks/useFetchImage";
import { ErrorLabel } from "./components/Molecules/ErrorLabel";
import { useState } from "react";
import { Header } from "./components/Organisims/Header";

function App() {
  const { imgInfos, setImgInfos, isComplete } = useFetchImage();
  const [isError, setIsError] = useState<boolean>(false);
  
  return (
    <div className="App">
      <Header />
      <Box p="5">
        {isError && <ErrorLabel setIsError={setIsError} />}
        <Box mt={5}>
          <UploadForm setImgInfos={setImgInfos} setIsError={setIsError} />
        </Box>

        <Grid
          maxW="1200px"
          mx="auto"
          mt={8}
          templateColumns="repeat(3, 1fr)"
          gap={8}
        >
          {isComplete ? (
            <>
              {imgInfos.map((imgInfo, index) => (
                <ImgCard
                  setImgInfos={setImgInfos}
                  imgInfo={imgInfo}
                  key={index}
                />
              ))}
            </>
          ) : (
            <Text display="block" textAlign="center">
              ...Loading
            </Text>
          )}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
