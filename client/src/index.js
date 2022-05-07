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
        primary: [
          "#88B7B9",
          "#6EB2B6",
          "#52B2B7",
          "#3BB1B6",
          "#27ADB4",
          "#14ACB3",
          "#00ADB5",
          "#108D93",
          "#1A7478",
          "#206164",
          "#235254",
          "#244547",
          "#233C3D",
        ],
        lightBg: "#393E46",
        darkBg: "#222831",
        highlightBg: "#EAEAEA",
        leftoverBg: "#555D69",
      },

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
