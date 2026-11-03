import React from "react";
import { Routes, Route } from "react-router-dom";
import AipmLayout from "../../components/Shared/AipmLayout";
import Home from "./Home";
import OurStory from "./OurStory";
import Movements from "./Movements";
import Projects from "./Projects";
import GetInvolved from "./GetInvolved";
import Give from "./Give";
import ContactUs from "./ContactUs";

const AppUsers = () => {
  return (
    <Routes>
      <Route element={<AipmLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/movements" element={<Movements />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/give" element={<Give />} />
        <Route path="/contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
};

export default AppUsers;
