import React from "react";
import { Routes, Route } from "react-router-dom";

import { UserProvider } from "./UserContext";
import Homepage from "./components/homepage/Homepage";
import Shell from "./components/shell/Shell";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/*" element={<Shell />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
