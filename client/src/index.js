import React from "react";
import ReactDOM from "react-dom";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { NotificationsProvider } from "@mantine/notifications";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./UserContext";
import { theme } from "./utils/theme";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.render(
  <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
    <QueryClientProvider client={queryClient}>
      <ModalsProvider>
        <BrowserRouter>
          <UserProvider>
            <NotificationsProvider position="top-center" limit={3}>
              <App />
            </NotificationsProvider>
          </UserProvider>
        </BrowserRouter>
      </ModalsProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </MantineProvider>,
  document.getElementById("root"),
);
