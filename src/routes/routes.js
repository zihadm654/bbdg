import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/index";
import About from "../pages/about/index";
import Services from "../pages/services/index";
import Blog from "../pages/blog/index";
import Contact from "../pages/contact/index";
import Search from "../pages/search/index";
const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
};

export default Routers;
