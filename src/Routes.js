import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Customise from "./Customise";
import PricingPlans from "./PricingPlans";
import "./assets/css/style.css";
import Howtoinstall from "./Howtoinstall";
import Faq from "./Faq";
import FullscreenBarExample from "./FullscreenBarExample";
import NewDashboard from "./NewDashboard";
import NewFaq from "./NewFaq";
import MobileMenu from "./MobileMenu";

const Routes = () => {
  return (
    <Router>
      <Route path="/" element={<NewDashboard />}></Route>
      <Route path="*" element={<MobileMenu />}></Route>
      <Route path="/Dashboard" element={<Dashboard />}></Route>
      <Route path="/Customise" element={<Customise />}></Route>
      <Route path="/PricingPlans" element={<PricingPlans />}></Route>
      <Route path="/Howtoinstall" element={<Howtoinstall />}></Route>
      <Route path="/Faq" element={<Faq />}></Route>
      <Route path="/faqacc" element={<NewFaq />}></Route>
      <Route path="/FullscreenBar" element={<FullscreenBarExample />}></Route>
      <Route path="/mobilemenu" element={<MobileMenu />}></Route>
    </Router>
  );
};

export default Routes;
