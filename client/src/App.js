import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Shell from "./components/shell/Shell";
import CalendarPage from "./components/calendar/CalendarPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/*" element={<Shell />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
