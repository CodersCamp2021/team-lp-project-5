import React from "react";
import ReactDOM from "react-dom";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { theme } from "./utils/theme";

ReactDOM.render(
  <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
    <ModalsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalsProvider>
  </MantineProvider>,
  document.getElementById("root"),
);
