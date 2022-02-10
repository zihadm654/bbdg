import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/index";
// import About from "../pages/about/index";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<About />} /> */}
      </Routes>
    </>
  );
};

export default Routers;
