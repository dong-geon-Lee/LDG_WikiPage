import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import WikiPage from "./pages/WikiPage/WikiPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="wiki" element={<WikiPage />} />
      </Routes>
    </Router>
  );
};

export default App;
