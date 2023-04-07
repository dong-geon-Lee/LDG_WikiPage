import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage, WikiPage, WikiContentPage } from "./pages";
import Header from "./components/Header/Header";

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
