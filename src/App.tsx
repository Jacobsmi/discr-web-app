import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<>Home Page</>} />
        <Route index element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
