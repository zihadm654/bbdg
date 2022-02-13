import style from "./write_us.module.css";
import Banner from "../../helpers/Banner/Banner";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import LayoutStyle from "../../helpers/layout/layout.module.css";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import { useState } from "react";
import axios from "axios";
import validator from "validator";
import Modal from "../../helpers/Modal/Modal";

const WriteUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [source, setSource] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pin, setPin] = useState("");
  const [website, setWebsite] = useState("");
  const [saleRange, setSaleRange] = useState("");
  const [message, setMessage] = useState("");
  const [accept, setAccept] = useState(false);

  // const [extension, setExtension] = useState();
  const [globalMessage, setGlobalMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [fNameErr, setFNameErr] = useState(false);
  const [lNameErr, setLNameErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [confrimEmailErr, setconfirmEmailErr] = useState(false);
  const [roleErr, setRoleErr] = useState(false);
  const [stateErr, setStateErr] = useState(false);
  const [saleErr, setSaleErr] = useState(false);
  const [sourceErr, setSourceErr] = useState(false);
  const [websiteErr, setWebsiteErr] = useState(false);

  const submitData = async (e) => {
    e.preventDefault();

    if (
      message.length < 1 ||
      city.length < 1 ||
      company.length < 1 ||
      address.length < 1 ||
      pin.length < 1
    ) {
      setGlobalMessage("All fields are required");
      setIsVisible(true);
    } else if (role == null) {
      setGlobalMessage("please select role");
      setIsVisible(true);
      setRoleErr(true);
      setSourceErr(false);
      setSaleErr(false);
      setStateErr(false);
      setEmailErr(false);
      setFNameErr(false);
      setLNameErr(false);
      setPhoneErr(false);
    } else if (source == null) {
      setGlobalMessage("please select source");
      setIsVisible(true);
      setRoleErr(false);
      setSourceErr(true);
      setSaleErr(false);
      setStateErr(false);
      setEmailErr(false);
      setFNameErr(false);
      setLNameErr(false);
      setPhoneErr(false);
    } else if (saleRange == null) {
      setGlobalMessage("please select saleRange");
      setIsVisible(true);
      setRoleErr(false);
      setSourceErr(false);
      setSaleErr(true);
      setStateErr(false);
      setEmailErr(false);
      setFNameErr(false);
      setLNameErr(false);
      setPhoneErr(false);
    } else if (state == null) {
      setGlobalMessage("please select state");
      setIsVisible(true);
      setRoleErr(false);
      setSourceErr(false);
      setSaleErr(false);
      setStateErr(true);
      setEmailErr(false);
      setFNameErr(false);
      setLNameErr(false);
      setPhoneErr(false);
    } else if (!checkEmail(email)) {
      setGlobalMessage("please enter a valid email");
      setIsVisible(true);
      setEmailErr(true);
      setFNameErr(false);
      setLNameErr(false);
      setPhoneErr(false);
      setconfirmEmailErr(false);
      setRoleErr(false);
      setSourceErr(false);
      setSaleErr(false);
      setStateErr(false);
    } else if (!checkName(firstName)) {
      setGlobalMessage("First name should be an alphabet");
      setIsVisible(true);
      setEmailErr(false);
      setFNameErr(true);
      setLNameErr(false);
      setPhoneErr(false);
      setconfirmEmailErr(false);
      setRoleErr(false);
      setSourceErr(false);
      setSaleErr(false);
      setStateErr(false);
    } else if (!checkName(lastName)) {
      setGlobalMessage("Last name should be an alphabet");
      setIsVisible(true);
      setEmailErr(false);
      setFNameErr(false);
      setLNameErr(true);
      setPhoneErr(false);
      setconfirmEmailErr(false);
      setRoleErr(false);
      setSourceErr(false);
      setSaleErr(false);
      setStateErr(false);
    } else if (!checkMobile(mobile)) {
      setGlobalMessage("Please enter a valid phone Number");
      setIsVisible(true);
      setEmailErr(false);
      setFNameErr(false);
      setLNameErr(false);
      setPhoneErr(true);
      setconfirmEmailErr(false);
      setRoleErr(false);
      setSourceErr(false);
      setSaleErr(false);
      setStateErr(false);
    } else if (!checkConfirmEmail(confirmEmail)) {
      setGlobalMessage("Confirm email didn't match");
      setIsVisible(true);
      setEmailErr(false);
      setFNameErr(false);
      setLNameErr(false);
      setPhoneErr(false);
      setconfirmEmailErr(true);
      setRoleErr(false);
      setSourceErr(false);
      setSaleErr(false);
      setStateErr(false);
    } else if (!checkWebsite(website)) {
      setGlobalMessage("Not a valid website");
      setIsVisible(true);
      setWebsiteErr(true);
      setEmailErr(false);
      setFNameErr(false);
      setLNameErr(false);
      setPhoneErr(false);
      setconfirmEmailErr(false);
      setRoleErr(false);
      setSourceErr(false);
      setSaleErr(false);
      setStateErr(false);
    } else {
      await axios
        .post("https://bbdg-backend.herokuapp.com/user", {
          firstName,
          lastName,
          telephone: mobile,
          job_role: role,
          email,
          source_of_info: source,
          company_name: company,
          city,
          state,
          address,
          pin,
          website,
          sale_range: saleRange,
          query_message: message,
          want_updates: accept,
        })
        .then(() => {
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
          setMobile("");
          // setExtension("");
          setCompany("");
          setCity("");
          setSaleRange(null);
          setSource(null);
          setState(null);
          setPin("");
          setRole(null);
          setAddress("");
          setWebsite("");
          setSaleRange("");
          setMessage("");
          setConfirmEmail("");
          setGlobalMessage("Your request has been sent!");
          setIsVisible(true);
          setEmailErr(false);
          setFNameErr(false);
          setLNameErr(false);
          setPhoneErr(false);
          setRoleErr(false);
          setSourceErr(false);
          setSaleErr(false);
          setStateErr(false);
          setconfirmEmailErr(false);
          setWebsiteErr(false);
          setAccept(false);
        })
        .catch((e) => alert("Error", e));
    }
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  const checkName = (check_Name) => {
    const isvalidName = validator.isAlpha(check_Name);
    return isvalidName;
  };

  const checkEmail = (check_email) => {
    const isvalidEmail = validator.isEmail(check_email);
    return isvalidEmail;
  };

  const checkMobile = (check_phone) => {
    const isvalidPhone = validator.isMobilePhone(check_phone);
    return isvalidPhone;
  };
  const checkConfirmEmail = (check_confirm) => {
    if (check_confirm === email) {
      return true;
    }
  };
  const checkWebsite = (check_website) => {
    if (check_website && check_website.length > 0) {
      return validator.isFQDN(check_website);
    }
    return true;
  };
  const checkAccept = (e) => {
    setAccept(e.target.checked);
    // console.log(e.target.checked);
  };
  return (
    <>
      <Banner>
        <p className={BannerStyle.smallHeading}>
          CONTACT US <i className="fas fa-chevron-right"></i>{" "}
          <span className={BannerStyle.lowOpacity}>WRITE US</span>
        </p>

        <p style={{ marginTop: "3rem" }} className={BannerStyle.BigHeading}>
          Write<br></br>Us
        </p>

        <p style={{ marginTop: "3rem" }} className={BannerStyle.midHeading}>
          HOW CAN WE HELP YOU?
        </p>
      </Banner>
      <div className={LayoutStyle.RootDiv + " " + style.mainDiv}>
        <div className={style.infoDiv}>
          <div className={style.infoIconDiv}>
            <i className={"fas fa-info-circle " + style.infoIcon}></i>
          </div>
          <div className={style.info}>
            <p className={style.infoTag}>
              If you’re looking for financing for your business, take a look at
              our business loans as well as other financing options available
              through our partners.
            </p>
            <p className={style.infoTag}>
              For general questions about BBDG’s financing solutions, advisory
              services or for any other question, complete the form below. One
              of our representatives will be in touch.
            </p>
          </div>
        </div>
        <div className={style.formDiv}>
          <p className={BannerStyle.midHeading + " " + style.heading}>
            INFORMATION ABOUT YOU
          </p>
          <div className={style.personalInfo}>
            <div className={style.subPersonalInfoDiv}>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className={fNameErr ? style.styleErr : style.halfInputTag}
                placeholder="First Name"
                value={firstName}
              />
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                className={lNameErr ? style.styleErr : style.halfInputTag}
                placeholder="Last Name"
                value={lastName}
              />
            </div>
            <div className={style.subPersonalInfoDiv}>
              <input
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                className={phoneErr ? style.styleErr : style.halfInputTag}
                placeholder="Phone No including Extension"
                value={mobile}
              />
              <select
                onChange={(e) => setRole(e.target.value)}
                className={roleErr ? style.styleSelectErr : style.halfSelectTag}
                // className={style.halfSelectTag}
                value={role}
              >
                <option
                  className={style.dropdownElement}
                  value=""
                  selected={role === ""}
                >
                  Select Job Role
                </option>
                <option className={style.dropdownElement} value="Owner">
                  Owner
                </option>
                <option className={style.dropdownElement} value="Senior leader">
                  Senior leader
                </option>
                <option className={style.dropdownElement} value="Manager">
                  Manager
                </option>
                <option className={style.dropdownElement} value="Employee">
                  Employee
                </option>
                <option
                  className={style.dropdownElement}
                  value="Teacher / Student"
                >
                  Teacher / Student
                </option>
              </select>
            </div>

            <div className={style.subPersonalInfoDiv}>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={emailErr ? style.styleErr : style.halfInputTag}
                placeholder="Email address"
                value={email}
              />
              <input
                onChange={(e) => {
                  setConfirmEmail(e.target.value);
                }}
                className={
                  confrimEmailErr ? style.styleErr : style.halfInputTag
                }
                placeholder="Confirm your email"
                value={confirmEmail}
              />
            </div>
            <div className={style.acceptStatement}>
              <input
                className={style.checkIcon}
                type="checkbox"
                onChange={checkAccept}
                value={accept}
                checked={accept ? "checked" : ""}
              />

              {/* <i className={"far fa-check-square " + style.checkIcon}></i> */}
              <p className={style.acceptLine}>
                I accept that BBDG send me, via email, information about
                business advice, solutions and events. You can withdraw your
                consent at any time
              </p>
            </div>
            <div className={style.btnSection}>
              <PrimaryButton text="TERMS OF USE" url="/contact/terms-of-use" />
              <PrimaryButton
                text="PRIVACY POLICY"
                url="/contact/privacy-policy"
              />
            </div>

            <div className={style.subPersonalInfoDiv}>
              <select
                onChange={(e) => setSource(e.target.value)}
                className={
                  sourceErr ? style.styleSelectErr : style.halfSelectTag
                }
                value={source}
              >
                <option
                  className={style.dropdownElement}
                  value=""
                  selected={source === ""}
                >
                  How did you hear about BBDG
                </option>
                <option
                  className={style.dropdownElement}
                  value="Professional (accountant, notary, lawyer, etc.)"
                >
                  Professional (accountant, notary, lawyer, etc.)
                </option>
                <option
                  className={style.dropdownElement}
                  value="Entrepreneur, colleague, friend or family"
                >
                  Entrepreneur, colleague, friend or family
                </option>
                <option
                  className={style.dropdownElement}
                  value="Financial institution"
                >
                  Financial institution
                </option>
                <option className={style.dropdownElement} value="Government">
                  Government
                </option>
                <option
                  className={style.dropdownElement}
                  value="Website (other than BBDG)"
                >
                  Website (other than BBDG)
                </option>
                <option className={style.dropdownElement} value="Web search">
                  Web search
                </option>
                <option className={style.dropdownElement} value="Social media">
                  Social media
                </option>
                <option
                  className={style.dropdownElement}
                  value="Online advertising"
                >
                  Online advertising
                </option>
                <option
                  className={style.dropdownElement}
                  value="Print advertising"
                >
                  Print advertising
                </option>
                <option className={style.dropdownElement} value="Other">
                  Other
                </option>
              </select>
            </div>
          </div>
          <br></br>
          <p className={BannerStyle.midHeading + " " + style.heading}>
            INFORMATION ABOUT YOUR COMPANY
          </p>
          <div className={style.personalCompanyInfo}>
            <div className={style.subPersonalInfoDiv}>
              <input
                onChange={(e) => setCompany(e.target.value)}
                className={style.halfInputTag}
                placeholder="Company Name"
                value={company}
              />
            </div>
            <div className={style.subPersonalInfoDiv}>
              <input
                onChange={(e) => setAddress(e.target.value)}
                style={{ width: "100%" }}
                className={style.halfInputTag}
                placeholder="Address"
                value={address}
              />
            </div>
            <div className={style.subPersonalInfoDiv}>
              <input
                onChange={(e) => setCity(e.target.value)}
                className={style.halfInputTag}
                placeholder="City"
                value={city}
              />
              <select
                onChange={(e) => setState(e.target.value)}
                className={
                  stateErr ? style.styleSelectErr : style.halfSelectTag
                }
                value={state}
              >
                <option
                  className={style.dropdownElement}
                  value=""
                  selected={state === ""}
                >
                  Select State
                </option>
                <option className={style.dropdownElement} value="State1">
                  State1
                </option>
                <option className={style.dropdownElement} value="State2">
                  State2
                </option>
                <option className={style.dropdownElement} value="State3">
                  State3
                </option>
              </select>
            </div>

            <div className={style.subPersonalInfoDiv}>
              <input
                onChange={(e) => setPin(e.target.value)}
                className={style.halfInputTag}
                placeholder="PIN"
                value={pin}
              />
            </div>
            <div className={style.subPersonalInfoDiv}>
              <input
                onChange={(e) => setWebsite(e.target.value)}
                className={websiteErr ? style.styleErr : style.halfInputTag}
                // className={sourceErr?style.styleErr:style.halfInputTag}
                placeholder="Website (optional)"
                value={website}
              />
            </div>
            <div className={style.subPersonalInfoDiv}>
              <select
                onChange={(e) => setSaleRange(e.target.value)}
                className={saleErr ? style.styleSelectErr : style.halfSelectTag}
                value={saleRange}
              >
                <option
                  className={style.dropdownElement}
                  value=""
                  selected={saleRange === ""}
                >
                  Select Gross sales range
                </option>
                <option
                  className={style.dropdownElement}
                  value="Less than Rs. 1,00,000"
                >
                  Less than Rs. 1,00,000
                </option>
                <option
                  className={style.dropdownElement}
                  value="Between Rs. 1,00,000 and Rs. 5,00,000"
                >
                  Between Rs. 1,00,000 and Rs. 5,00,000
                </option>
                <option
                  className={style.dropdownElement}
                  value="Between Rs. 5,00,000 and Rs. 25 Lakhs"
                >
                  Between Rs. 5,00,000 and Rs. 25 Lakhs
                </option>
                <option
                  className={style.dropdownElement}
                  value="Between Rs. 25 Lakhs and Rs. 50 Lakhs"
                >
                  Between Rs. 25 Lakhs and Rs. 50 Lakhs
                </option>
                <option
                  className={style.dropdownElement}
                  value="Rs. 50 Lakhs or more"
                >
                  Rs. 50 Lakhs or more
                </option>
              </select>
            </div>
            <div className={style.subPersonalInfoDiv}>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                className={style.textareaTag}
                value={message}
                placeholder="Tell Us about a business project or management challenge you would like us to help with"
              ></textarea>
            </div>
            {isVisible && <Modal message={globalMessage} />}
            <div onClick={submitData} className={style.btnSection}>
              <SecondaryButton text="Submit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WriteUs;
