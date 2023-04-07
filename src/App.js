import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import WikiPage from "./pages/WikiPage/WikiPage";
import Header from "./components/Header/Header";
import { courseDatas } from "./data/mockData";

const App = () => {
  const [courseItems, setCourseItems] = useState(courseDatas);

  return (
    <Router>
      <Header setCourseItems={setCourseItems} />
      <Routes>
        <Route path="/" element={<MainPage courseItems={courseItems} />} />
        <Route path="/:id" element={<WikiPage courseItems={courseItems} />} />
      </Routes>
    </Router>
  );
};

export default App;
