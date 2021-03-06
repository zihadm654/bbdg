import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";

import WeDo from "../pages/about/what-we-do";
import WeAre from "../pages/about/who-we-are";
import Advisory from "../pages/services/advisory/business-plan-template";
import BusinessAcquistions from "../pages/services/business-acquisitions/index";
import Industries from "../pages/services/industries/index";
import Finance from "../pages/services/financing";
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
import PortfolioDetails from "../pages/services/it-solutions/portfolio/details";
import ReqServices from "../pages/request-advisory-services/index";
import ReqLoan from "../pages/request-business-loan/index";

// loader
import Loader from "../helpers/PrimaryLoading/PrimaryLoading";

// code spliting
import Home from "../pages/index";
const About = lazy(() => import("../pages/about/index"));
const Services = lazy(() => import("../pages/services/index"));
const Blog = lazy(() => import("../pages/blog/index"));
const Contact = lazy(() => import("../pages/contact/index"));
const Search = lazy(() => import("../pages/search/index"));

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* navigation */}
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/services"
          element={
            <Suspense fallback={<Loader />}>
              <Services />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense fallback={<Loader />}>
              <Blog />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/search"
          element={
            <Suspense fallback={<Loader />}>
              <Search />
            </Suspense>
          }
        />
        {/* Sub Routes */}

        {/* Request routes  */}
        <Route path="/request-advisory-services" element={<ReqServices />} />
        <Route path="/request-business-loan" element={<ReqLoan />} />

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
        {/* <Route path="/services/" */}
        <Route path="/services/financing" element={<Finance />} />
        <Route
          path="/services/business-acquisitions"
          element={<BusinessAcquistions />}
        />
        <Route path="/services/industries" element={<Industries />} />
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
        <Route
          path="services/it-solutions/portfolio/:id"
          element={<PortfolioDetails />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default Routers;
