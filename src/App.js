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
import ProgramPage from "./container/ProgramPage.jsx/ProgramPage";
import ClassesPage from "./container/ClassesPage/ClassesPage";
import ScholarshipPage from "./container/ShcolarshipPage/ScholarshipPage";
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
        <Route path="/programpage" element={<ProgramPage />} />
        <Route path="/classespage" element={<ClassesPage />} />
        <Route path="/scholarshippage" element={<ScholarshipPage />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;
