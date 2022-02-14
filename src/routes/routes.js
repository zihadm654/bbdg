import React from "react";
import { Routes, Route, Navigate } from "react-router";
import Home from "../pages/index";
import About from "../pages/about/index";
import Services from "../pages/services/index";
import Blog from "../pages/blog/index";
import Contact from "../pages/contact/index";
import Search from "../pages/search/index";
import WeDo from "../pages/about/what-we-do";
import WeAre from "../pages/about/who-we-are";
import Advisory from "../pages/services/advisory/business-plan-template";
import Finance from "../pages/services/financing/small-business-loans";
import ItSolutions from "../pages/services/it-solutions/index";
import ArticleTools from "../pages/services/articles-and-tools/newsletters-and-economic-letter/index";
import AvailablePositions from "../pages/about/careers/available-positions/index";
import AnalysisResearch from "../pages/about/analysis-and-research/index";
import MediaRoom from "../pages/about/media-room/index";
import EventSponser from "../pages/about/events-and-sponsorships/index";
import CorporateGov from "../pages/about/corporate-governance/index";
import AwardDistinction from "../pages/about/award-and-distinctions/index";
import BCrops from "../pages/about/b-corps/index";
import SmallBusiness from "../pages/services/financing/small-business-loans";
import TermUse from "../pages/contact/terms-of-use/index";
import Confidentiality from "../pages/contact/confidentiality/index";
import Security from "../pages/contact/security/index";
import Tranparency from "../pages/contact/transparency/index";
import Write from "../pages/contact/write-us";
import BusinessPlan from "../pages/services/advisory/business-plan-template";
import Careers from "../pages/about/careers/index";
import Details from "../pages/iam/details";
import BlogDetails from "../pages/blog/details";
// import ServiceDetail from "../pages/services/details";
import WriteUs from "../pages/contact/terms-of-use/write-us";
import Portfolio from "../pages/services/it-solutions/portfolio/index";
// import PortfolioDetails from "../pages/services/it-solutions/portfolio/details";
const Routers = () => {
  return (
    <>
      <Routes>
        {/* navigation */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        {/* Sub Routes */}

        {/* about subroutes */}
        <Route path="/about/what-we-do" element={<WeDo />} />
        <Route path="/about/who-we-are" element={<WeAre />} />
        <Route
          path="/about/careers/available-positions"
          element={<AvailablePositions />}
        />
        <Route
          path="/about/analysis-and-research"
          element={<AnalysisResearch />}
        />
        <Route path="/about/media-room" element={<MediaRoom />} />
        <Route
          path="/about/events-and-sponsorships"
          element={<EventSponser />}
        />
        <Route path="/about/corporate-governance" element={<CorporateGov />} />
        <Route
          path="/about/award-and-distinctions"
          element={<AwardDistinction />}
        />
        <Route path="/about/b-corps" element={<BCrops />} />
        <Route path="/about/careers" element={<Careers />} />

        {/* services sub routes */}
        <Route path="/services/advisory" element={<Advisory />} />
        <Route path="/services/financing" element={<Finance />} />
        <Route path="/services/business-acquisitions" element={<Finance />} />
        <Route path="/services/industries" element={<Finance />} />
        <Route path="/services/it-solutions" element={<ItSolutions />} />
        <Route path="/services/digital-marketing" element={<ItSolutions />} />
        <Route path="/services/articles-and-tools" element={<ArticleTools />} />
        <Route
          path="/services/financing/small-business-loans"
          element={<SmallBusiness />}
        />
        <Route
          path="/services/advisory/business-plan-template"
          element={<BusinessPlan />}
        />
        <Route
          path="/services/articles-and-tools/newsletters-and-economic-letter"
          element={<ArticleTools />}
        />

        {/* contact sub routes */}
        <Route path="/contact/terms-of-use" element={<TermUse />} />
        <Route path="/contact/Confidentiality" element={<Confidentiality />} />
        <Route path="/contact/security" element={<Security />} />
        <Route path="/contact/transparency" element={<Tranparency />} />
        <Route path="/contact/write-us" element={<Write />} />
        <Route path="/contact/terms-of-use/write-us" element={<WriteUs />} />

        {/* dynamic routes */}

        {/* iam routes */}
        <Route path="/iam/:id" element={<Details />} />
        {/* blogs dynamic routes */}
        <Route path="blog/:id" element={<BlogDetails />} />
        <Route path="services/it-solutions/portfolio" element={<Portfolio />} />
        {/* <Route path="services/ite-solutions/portfolio/:id" element={<PortfolioDetails />}/> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default Routers;
