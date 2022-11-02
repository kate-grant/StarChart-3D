import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <main>
          <h1>StarChart</h1>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default AppRoutes;
