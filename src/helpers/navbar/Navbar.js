import { useState, useEffect } from "react";
import style from "./navbar.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import logoImg from "../../assets/images/logo.png";
const Navbar = () => {
  const { pathname } = useLocation();
  const [currentRoute, setCurrentRoute] = useState(pathname);

  const [scroll, setScroll] = useState(100);
  const [isSmall, setIsSmall] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const [showServiceSubMenu, setShowServiceSubMenu] = useState(false);
  const [showAboutSubMenu, setShowAboutSubMenu] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    window.innerWidth <= 810 ? setIsSmall(true) : setIsSmall(false);
    window.addEventListener("resize", () => {
      window.innerWidth <= 810 ? setIsSmall(true) : setIsSmall(false);
    });
  }, []);
  useEffect(() => {
    console.log("forced closing navbar");
    setCurrentRoute(pathname);
    setMenuOpened(false);
  }, [pathname]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, [scroll]);

  return (
    <div className={scroll > 0 ? style.mainNavbarDiv : style.mainNavbarDiv2}>
      <div className={style.navbarLinks}>
        <div className={style.links}>
          <Link to="/">
            <div className={style.companyLogo}>
              <img className={style.logoImg} src={logoImg} alt="logo" />
            </div>
          </Link>
          <div
            className={style.linkElements}
            style={
              isSmall
                ? menuOpened
                  ? { display: "block" }
                  : { display: "none" }
                : { display: "flex" }
            }
          >
            <Link
              to="/"
              className={
                pathname.startsWith("/home/")
                  ? style.activeNavElement
                  : pathname == "/"
                  ? style.activeNavElement
                  : style.navElement
              }
            >
              <span>HOME</span>
              <span className={style.navbarUnderline}></span>
            </Link>
            {/* <Link  {isSmall ? onClick={()=> console.log('clicked'): href="/about"}> */}
            <li>
              <Link
                to="/about"
                className={
                  pathname.startsWith("/about") ||
                  pathname.startsWith("/about/")
                    ? style.activeNavElement + " " + style.menuList
                    : style.navElement + " " + style.menuList
                }
              >
                <span>ABOUT US</span>
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAboutSubMenu((prev) => !prev);
                  }}
                  className={style.subMenu}
                >
                  {showAboutSubMenu ? (
                    <i className="fas fa-caret-down"></i>
                  ) : (
                    <i className="fas fa-greater-than"></i>
                  )}
                </span>
                <span className={style.navbarUnderline}></span>
                <div
                  style={
                    isSmall
                      ? showAboutSubMenu
                        ? { display: "block" }
                        : { display: "none" }
                      : { display: "block" }
                  }
                  className={style.hoverList}
                >
                  <ul
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpened(false);
                      setShowAboutSubMenu(false);
                    }}
                  >
                    <Link to="/about/who-we-are">
                      <li>who we are </li>
                    </Link>
                    <Link to="/about/what-we-do">
                      <li>what we do</li>
                    </Link>
                    <Link to="/about/analysis-and-research">
                      <li>analysis and research</li>
                    </Link>
                    <Link to="/about/media-room">
                      <li>media room</li>
                    </Link>
                    <Link to="/about/events-and-sponsorships">
                      <li>events and sponsorships</li>
                    </Link>
                    <Link to="/about/corporate-governance">
                      <li>corporate governance</li>
                    </Link>
                    <Link to="/about/award-and-distinctions">
                      <li>awards and distinctions</li>
                    </Link>
                    <Link to="/about/b-corps">
                      <li>b corps</li>
                    </Link>
                  </ul>
                </div>
              </Link>
            </li>
            <Link
              to="/services"
              // onClick={() => setMenuOpened(false)}
              className={
                pathname.startsWith("/services") ||
                pathname.startsWith("/services/")
                  ? style.activeNavElement + " " + style.menuList
                  : style.navElement + " " + style.menuList
              }
            >
              <span>SERVICES</span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  setShowServiceSubMenu((prev) => !prev);
                }}
                className={style.subMenu}
              >
                {showServiceSubMenu ? (
                  <i className="fas fa-caret-down"></i>
                ) : (
                  <i className="fas fa-greater-than"></i>
                )}
              </span>
              <span className={style.navbarUnderline}></span>
              <div
                style={
                  isSmall
                    ? showServiceSubMenu
                      ? { display: "block" }
                      : { display: "none" }
                    : { display: "block" }
                }
                className={style.hoverList}
              >
                <ul
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpened(false);
                    setShowServiceSubMenu(false);
                  }}
                >
                  <Link to="/services/advisory">
                    <li>Advisory</li>
                  </Link>
                  <Link to="/services/financing">
                    <li>Financing</li>
                  </Link>
                  <Link to="/services/business-acquisitions">
                    <li>Business Acquisitions</li>
                  </Link>
                  <Link to="/services/industries">
                    <li>Industries</li>
                  </Link>
                  <Link to="/services/it-solutions">
                    <li>it solutions</li>
                  </Link>
                  <Link to="/services/">
                    <li>view more...</li>
                  </Link>
                </ul>
              </div>
            </Link>

            <Link
              to="/blog"
              className={
                pathname.startsWith("/blog/")
                  ? style.activeNavElement
                  : pathname.startsWith("/blog")
                  ? style.activeNavElement
                  : style.navElement
              }
            >
              <span>BLOG</span>
              <span className={style.navbarUnderline}></span>
            </Link>
            <Link
              to="/contact"
              className={
                pathname.startsWith("/contact/")
                  ? style.activeNavElement
                  : pathname.startsWith("/contact")
                  ? style.activeNavElement
                  : style.navElement
              }
            >
              <span>Contact Us</span>
              <span className={style.navbarUnderline}></span>
            </Link>
          </div>
        </div>
        <div className={style.navbarContactUs}>
          <div
            onClick={() => {
              language === "en" ? setLanguage("fr") : setLanguage("en");
            }}
            className={style.language}
          >
            {language}
          </div>
          <div className={style.searchIcon}>
            <Link to="/search">
              <i className="fas fa-search "></i>
            </Link>
          </div>
          <div className={style.msgImg}></div>
          <div className={style.contactDetails}>
            <p className={style.callAnyTime}>CALL ANYTIME</p>
            <p className={style.mobNum}>+1 863 666 7029</p>
          </div>
          <div
            onClick={() => {
              setMenuOpened((prev) => !prev);
              setShowAboutSubMenu(false);
              setShowServiceSubMenu(false);
            }}
            className={style.menuIcon}
          >
            {menuOpened ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// const ServiceList = (props) => {
//   console.log(props);
//   const services = [
//     {
//       _id: "60c4b63918d79037e4fa7243",
//       heading: "advisory",
//       subHeading:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
//       text: null,
//       parent: null,
//       __v: 0,
//     },
//     {
//       _id: "60c4b83034e1ee30d839bdbc",
//       heading: "financing",
//       subHeading:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
//       text: null,
//       parent: null,
//       __v: 0,
//     },
//     {
//       _id: "60c4b83a34e1ee30d839bdbd",
//       heading: "business-acquisitions",
//       subHeading:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
//       text: null,
//       parent: null,
//       __v: 0,
//     },
//     {
//       _id: "60c4b84334e1ee30d839bdbe",
//       heading: "industries",
//       subHeading:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
//       text: null,
//       parent: null,
//       __v: 0,
//     },
//     {
//       _id: "60c4b84c34e1ee30d839bdbf",
//       heading: "it-solutions",
//       subHeading:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
//       text: null,
//       parent: null,
//       __v: 0,
//     },
//     {
//       _id: "60c4b85534e1ee30d839bdc0",
//       heading: "digital-marketing",
//       subHeading:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
//       text: null,
//       parent: null,
//       __v: 0,
//     },
//     {
//       _id: "60c4c907eaa1ab00154a514e",
//       heading: "environment",
//       subHeading:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
//       text: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptatevelit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata",
//       parent: null,
//       __v: 0,
//     },
//   ];
//   const list = [];
//   const router = useRouter();

//   for (var i = 0; i < 5; i++) {
//     console.log(router.asPath);
//     list.push(
//       <Link href={"/services/" + services[i].heading.toLowerCase()}>
//         <li>{services[i].heading}</li>
//       </Link>
//     );
//   }
//   list.push(
//     <Link href="/services">
//       <li>view more...</li>
//     </Link>
//   );
//   return list;
// };

//  {/* <div className={style.hoverList}>
//                   <ul>
//                     <h2>hey</h2>
//                     {/* <ServiceList /> */}
//                     </ul>
//                   </div> */}
