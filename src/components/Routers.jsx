import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ProjectsPage from "../pages/ProjectsPage.jsx";
import MilestonesPage from "../pages/MilestonesPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import Electricians from "./skilled/Electricians.jsx";
import Barbender from "./skilled/Barbender.jsx";
import Plumbers from "./skilled/Plumbers.jsx";
import Masons from "./skilled/Masons.jsx";
import Painters from "./skilled/Painters.jsx";
import Welder from "./skilled/Welder.jsx";
import Shuttering from "./skilled/Shuttering.jsx";
import Foreman from "./skilled/Foreman.jsx";
import Tiling from "./skilled/Tiling.jsx";
import Fabricator from "./skilled/Fabricators.jsx";
import Helpers from "./unskilled/Helpers.jsx";
import Cleaners from "./unskilled/Cleaners.jsx";
import Loaders from "./unskilled/Loaders.jsx";
import SiteAssistant from "./unskilled/SiteAssistant.jsx";
import FittersHelpers from "./unskilled/FittersHelpers.jsx";
import HouseKeep from "./unskilled/HouseKeep.jsx";
import Short from "./project-base/Short.jsx";
import Long from "./project-base/Long.jsx";
import Timeline from "./project-base/Timeline.jsx";
import Budget from "./project-base/Budget.jsx";
import Skilled from "./project-base/Skilled.jsx";
import Onboarding from "./turnkey/Onboarding.jsx";
import Accommodation from "./turnkey/Accommodation.jsx";
import Compliance from "./turnkey/Compliance.jsx";
import ProjectStaffing from "./turnkey/ProjectStaffing.jsx";
import SinglePointContact from "./turnkey/SinglePointContact.jsx";
import Wage from "./nmr/Wage.jsx";
import Contract from "./nmr/Contract.jsx";
import Payroll from "./nmr/Payroll.jsx";
import Compliances from "./nmr/Compliance.jsx";

const Routers = () => {
  return <>
  
  <Router >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/milestones" element={<MilestonesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/electricians" element={<Electricians />} />
        <Route path="/Barbender" element={<Barbender />} />
        <Route path="/plumbers" element={<Plumbers />} />
        <Route path="/masons" element={<Masons />} />
        <Route path="/Painters" element={<Painters />} />
        <Route path="/Welders" element={<Welder />} />
        <Route path="/shuttering" element={<Shuttering />} />
        <Route path="/foreman" element={<Foreman />} />
        <Route path="/tiling" element={<Tiling />} />
        <Route path="/fabricator" element={<Fabricator />} />
        <Route path="/Helpers" element={<Helpers />} />
        <Route path="/Cleaners" element={<Cleaners />} />
        <Route path="/Loaders" element={<Loaders />} />
        <Route path="/siteassistant" element={<SiteAssistant />} />
        <Route path="/fittershelpers" element={<FittersHelpers />} />
        <Route path="/HouseKeep" element={<HouseKeep />} />
        <Route path="/short" element={<Short />} />
         <Route path="/long" element={<Long />} /> 
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/skill" element={<Skilled />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/project-staffing" element={<ProjectStaffing />} />
          <Route path="/single-point-contact" element={<SinglePointContact />} />
          <Route path="/wage" element={<Wage />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/compliances" element={<Compliances />} />
        
      </Routes>
    </Router>
  </>
   
  
}

export default Routers