import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Landing from "./pages/landing/Landing";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route index element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
