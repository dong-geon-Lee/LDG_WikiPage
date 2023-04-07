import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { courseDatas } from "./data/mockData";
import MainPage from "./pages/MainPage/MainPage";
import WikiPage from "./pages/WikiPage/WikiPage";
import Header from "./components/Header/Header";
import WikiContentPage from "./pages/WikiContentPage/WikiContentPage";

const App = () => {
  const [courseItems, setCourseItems] = useState(courseDatas);

  return (
    <Router>
      <Header courseItems={courseItems} setCourseItems={setCourseItems} />
      <Routes>
        <Route path="/" element={<MainPage courseItems={courseItems} />} />
        <Route path="/:id" element={<WikiPage courseItems={courseItems} />} />
        <Route path="/:id/modify" element={<WikiContentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
