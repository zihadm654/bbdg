import { useLocation } from "react-router";
import ProjectCard from "../Project";
import group__img from "../../assets/images/Mask Group.png";
import group1__img from "../../assets/images/Mask Group-1.png";
import group2__img from "../../assets/images/Mask Group-2.png";
import group5__img from "../../assets/images/Mask Group-5.png";
import group6__img from "../../assets/images/Mask Group-6.png";
import group4__img from "../../assets/images/Mask Group-4.png";
import group3__img from "../../assets/images/Mask Group-3.png";

const NavigationProjectCards = () => {
  const { pathname } = useLocation();
  return (
    <>
      <ProjectCard
        heading="WHO WE ARE"
        url="/about/who-we-are"
        image={group6__img}
        isActive={pathname === "/about/who-we-are" ? true : false}
      />
      <ProjectCard
        heading="WHAT WE DO"
        url="/about/what-we-do"
        image={group1__img}
        isActive={pathname === "/about/what-we-do" ? true : false}
      />
      <ProjectCard
        heading="ANALYSIS AND REASEARCH"
        url="/about/analysis-and-research"
        image={group5__img}
        isActive={pathname === "/about/analysis-and-research" ? true : false}
      />
      <ProjectCard
        heading="MEDIA ROOM"
        url="/about/media-room"
        image={group4__img}
        isActive={pathname === "/about/media-room" ? true : false}
      />
      <ProjectCard
        heading="EVENTS AND SPONSORSHIPS"
        url="/about/events-and-sponsorships"
        image={group3__img}
        isActive={pathname === "/about/events-and-sponsorships" ? true : false}
      />
      <ProjectCard
        heading="CORPORATE GOVERNANCE"
        url="/about/corporate-governance"
        image={group__img}
        isActive={pathname === "/about/corporate-governance" ? true : false}
      />
      <ProjectCard
        heading="AWARDS AND DISTINCTIONS"
        url="/about/award-and-distinctions"
        image={group2__img}
        isActive={pathname === "/about/award-and-distinctions" ? true : false}
      />
      <ProjectCard
        heading="B CORPS"
        url="/about/b-corps"
        image={group1__img}
        isActive={pathname === "/about/b-corps" ? true : false}
      />
    </>
  );
};

export default NavigationProjectCards;
