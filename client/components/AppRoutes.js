import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Info from "./Info.js";

const AppRoutes = () => {
  return (
    <Router>
      <div>
        <div id="sidebar">
          <ul>
            <li>
              <Link to="/">
                <span>
                  <span class="material-symbols-outlined">auto_awesome</span>
                </span>
              </Link>
            </li>
            <li>
              <a href="">
                <span>
                  <span class="material-symbols-outlined">insights</span>
                </span>
              </a>
            </li>
            <li>
              <a href="https://github.com/kate-grant" target="_blank">
                <span>
                  <span class="material-symbols-outlined">code</span>
                </span>
              </a>
            </li>
            <li>
              <Link to="/info">
                <span>
                  <span class="material-symbols-outlined">info</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <h1>StarChart</h1>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default AppRoutes;
