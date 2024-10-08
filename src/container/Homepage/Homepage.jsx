import React from "react";
import Header from "../Header/Header";
import Program from "../Program/Program";
import Intro from "../Intro/Intro";
import AboutSchool from "../AboutSchool/AboutSchool";
import Classes from "../Classes/Classes";
import Langclasseshome from "../Langclasseshome/Langclasseshome";
import Scholarship from "../Scholarship/Scholarship";
import News from "../News/News";

const Homepage = () => (
  <div>
    <Header />
    <Intro />
    <Program />
    <AboutSchool />
    <Classes />
    <Langclasseshome />
    <Scholarship />
    <News />
  </div>
);

export default Homepage;
