import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <MantineProvider
    withNormalizeCSS
    withGlobalStyles
    theme={{
      colorScheme: "dark",
      white: "#EEEEEE",
      black: "#222831",
      fontFamily: "Cabin, sans-serif",
      headings: {
        fontFamily: "Cabin, sans-serif",
        fontWeight: 700,
        sizes: {
          h1: { fontSize: 48 },
          h2: { fontSize: 44 },
          h3: { fontSize: 40 },
        },
      },
      colors: {
        main: "#00ADB5",
        lightBg: "#393E46",
        darkBg: "#222831",
        highlightBg: "#555D69",
      },
      primaryColor: "main",

      other: { mainShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" },
    }}
  >
    <ModalsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalsProvider>
  </MantineProvider>,
  document.getElementById("root"),
);
