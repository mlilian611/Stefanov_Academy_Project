// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Homepage from "./container/Homepage/Homepage";
import AboutUs from "./container/AboutUs/AboutUs";
import { Navbar } from "./components";
import { Footer } from "./container";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
