import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import WikiPage from "./pages/WikiPage/WikiPage";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="wiki" element={<WikiPage />} />
      </Routes>
    </Router>
  );
};

export default App;
