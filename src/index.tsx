import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";

const theme = extendTheme({
  fonts: {
    body: "Archivo, sans-serif",
  },
});
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

if (!domain || !clientId) {
  throw new Error("Bad Auth0 config");
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={"http://localhost:3000"}
      audience={`http://localhost:5000`}
    >
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>
);
