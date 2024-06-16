import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Employers from "./components/employers/employers.js";
import Companies from "./components/companies/companies";
import TimeTable from "./components/timetable/timetable.js";
import Tasks from "./components/tasks/tasks.js";
import Projects from "./components/projects/projects.js";
import Stages from "./components/stages/stages.js";

import Home from "./components/home/home.js";

import BILABLogo from "./img/BILAB.svg";
import caseIcon from "./img/case.svg";
import diagramIcon from "./img/diagram.svg";
import pinIcon from "./img/pin.svg";

function App() {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };



  return (
    <Router>
      <div className="content">
        <div className="burger">
          <Link to="/" className="burger-logo">
            <img src={BILABLogo} alt="burger-logo" />
          </Link>
          <div className="burger-block">
            <Link
              to="/projects"
              className={`burger-block__link ${
                activeLink === "projects" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("projects")}
            >
              <img src={caseIcon} alt="case" />
              <div className="burger-block__text">Экономика проектов</div>
            </Link>
            <Link
              to="/tasks"
              className={`burger-block__link ${
                activeLink === "tasks" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("tasks")}
            >
              <img src={diagramIcon} alt="diagram" />
              <div className="burger-block__text">Управление задачами</div>
            </Link>
            <Link
              to="/employers"
              className={`burger-block__link ${
                activeLink === "employers" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("employers")}
            >
              <img src={pinIcon} alt="pin" />
              <div className="burger-block__text">Справочник</div>
            </Link>
          </div>
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employers" element={<Employers />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/timetable" element={<TimeTable />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stages" element={<Stages />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
