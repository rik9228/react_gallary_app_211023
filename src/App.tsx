import "./App.css";
import { Text, Button, Box } from "@chakra-ui/react";
import { Img } from "./components/Atoms/Img";

function App() {
  return (
    <div className="App">
      <Box p="5">
        <Text fontSize="5xl" as="h1">
          My Image Gallary
        </Text>
        <Button colorScheme="blue">Button</Button>
        <Img />
      </Box>
    </div>
  );
}

export default App;
