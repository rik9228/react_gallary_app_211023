import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./components/Providers/AuthProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);
