import React from "react";
import {  Routes, Route } from "react-router-dom";
import { AboutMeScene, HomeScene,ProjectsListScene } from "../../scenes";

export const RouterComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScene />} />
      <Route path="/about-me" element={<AboutMeScene />} />
      <Route path="/projects" element={<ProjectsListScene />} />
    </Routes>
  );
};