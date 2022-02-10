import ProjectCard from "../Project";

const NavigationProjectCards = () => {
  return (
    <>
      <ProjectCard
        heading="WHO WE ARE"
        url="/about/who-we-are"
        image="../../assets/images/Mask Group-6.png"
        // isActive={route.pathname == "/about/who-we-are" ? true : false}
      />
      <ProjectCard
        heading="WHAT WE DO"
        url="/about/what-we-do"
        image="../../assets/images/Mask Group-1.png"
        // isActive={route.pathname == "/about/what-we-do" ? true : false}
      />
      <ProjectCard
        heading="ANALYSIS AND REASEARCH"
        url="/about/analysis-and-research"
        image="../../assets/images/Mask Group-5.png"
        // isActive={
        // route.pathname == "/about/analysis-and-research" ? true : false
        // }
      />
      <ProjectCard
        heading="MEDIA ROOM"
        url="/about/media-room"
        image="../../assets/images/Mask Group-4.png"
        // isActive={route.pathname == "/about/media-room" ? true : false}
      />
      <ProjectCard
        heading="EVENTS AND SPONSORSHIPS"
        url="/about/events-and-sponsorships"
        image="../../assets/images/Mask Group-3.png"
        // isActive={route.pathname == "/about/events-and-sponsorships" ? true : false}
      />
      <ProjectCard
        heading="CORPORATE GOVERNANCE"
        url="/about/corporate-governance"
        image="../../assets/images/Mask Group.png"
        // isActive={route.pathname == "/about/corporate-governance" ? true : false}
      />
      <ProjectCard
        heading="AWARDS AND DISTINCTIONS"
        url="/about/award-and-distinctions"
        image="../../assets/images/Mask Group-2.png"
        // isActive={route.pathname == "/about/award-and-distinctions" ? true : false}
      />
      <ProjectCard
        heading="B CORPS"
        url="/about/b-corps"
        image="../../assets/images/Mask Group-1.png"
        // isActive={route.pathname == "/about/b-corps" ? true : false}
      />
    </>
  );
};

export default NavigationProjectCards;
