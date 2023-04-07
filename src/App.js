import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import WikiPage from "./pages/WikiPage/WikiPage";
import Header from "./components/Header/Header";
import WikiContentPage from "./pages/WikiContentPage/WikiContentPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<WikiPage />} />
        <Route path="/:id/modify" element={<WikiContentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
