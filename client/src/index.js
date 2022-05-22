import React from "react";
import ReactDOM from "react-dom";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import AddTaskModal from "./components/modals/addTaskModal/AddTaskModal";
import { UserProvider } from "./UserContext";
import { modalProps } from "./utils/modalProps";
import { theme } from "./utils/theme";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
    <QueryClientProvider client={queryClient}>
      <ModalsProvider
        modals={{ addTaskModal: AddTaskModal }}
        modalProps={modalProps}
      >
        <BrowserRouter>
          <UserProvider>
            <App />
          </UserProvider>
        </BrowserRouter>
      </ModalsProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </MantineProvider>,
  document.getElementById("root"),
);
