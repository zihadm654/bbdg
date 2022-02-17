import style from "./request-business-loan.module.css";
import Banner from "../../helpers/Banner/Banner";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import LayoutStyle from "../../helpers/layout/layout.module.css";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import { useEffect, useState } from "react";
import axios from "axios";
import validator from "validator";
import Modal from "../../helpers/Modal/Modal";
import {
  FormControl,
  // FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";
import Loader from "../../helpers/PrimaryLoading/PrimaryLoading";
const BusinessLoan = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [source, setSource] = useState("");
  const [fresh_business, setFresh_business] = useState("");
  const [is_startup, setIs_startup] = useState();
  const [accept, setAccept] = useState(false);
  const [age, setAge] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [amount_of_loan, setAmount_of_loan] = useState();
  const [key_points, setKey_points] = useState("");
  const [globalMessage, setGlobalMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const validateForm = () => {
    if (firstName.length === 0) {
      setIsVisible(true);
      setGlobalMessage("First Name can't be empty");
    } else if (lastName.length === 0) {
      setIsVisible(true);
      setGlobalMessage("Last Name can't be empty");
    } else if (mobile.length === 0) {
      setIsVisible(true);
      setGlobalMessage("Mobile can't be empty");
    } else if (mobile.length > 10 || mobile.length < 10) {
      setIsVisible(true);
      setGlobalMessage("Mobile number should  be of 10 digits");
    } else if (!role || role.length === 0) {
      setIsVisible(true);
      setGlobalMessage("Role can't be empty");
    } else if (email.length === 0) {
      setIsVisible(true);
      setGlobalMessage("Email can't be empty");
    } else if (!validator.isEmail(email)) {
      setIsVisible(true);
      setGlobalMessage("Email is not correctly formatted");
    } else if (confirmEmail.length === 0) {
      setIsVisible(true);
      setGlobalMessage("Confirm Email input can't be empty");
    } else if (confirmEmail !== email) {
      setIsVisible(true);
      setGlobalMessage("Email's don't match");
    } else if (!source || source.length === 0) {
      setIsVisible(true);
      setGlobalMessage("Source can't be empty");
    } else if (!fresh_business) {
      setIsVisible(true);
      setGlobalMessage("Fresh Business can't be empty");
    } else if (!is_startup) {
      setIsVisible(true);
      setGlobalMessage("Is Startup can't be empty");
    } else if (introduction.length === 0) {
      setIsVisible(true);
      setGlobalMessage("Introduction can't be empty");
    } else if (age.length === 0) {
      setIsVisible(true);
      setGlobalMessage("Duration can't be empty");
    } else if (!amount_of_loan || amount_of_loan.length === 0) {
      setIsVisible(true);
      setGlobalMessage("Amount of Loan can't be empty");
    } else if (key_points.length === 0) {
      setIsVisible(true);
      setGlobalMessage("Key points can't be empty");
    } else {
      setIsVisible(false);
      postAPI();
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const postAPI = () => {
    setIsLoading(true);

    axios
      .post("https://bbdg-backend.herokuapp.com/form/business-loan", {
        firstName,
        lastName,
        email,
        phone: mobile,
        job_role: role,
        source,
        age,
        wants_updates: accept,
        is_startup,
        fresh_business,
        amount_of_loan,
        key_points,
        introduction,
      })
      .then((response) => {
        setIsVisible(true);
        setGlobalMessage("Data saved successfully");
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
    clearValues();
  };
  const submitData = async (e) => {
    e.preventDefault();
    validateForm();
  };

  const clearValues = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setRole(null);
    setMobile("");
    setConfirmEmail("");
    setSource(null);
    setFresh_business(null);
    setIs_startup(null);
    setAge("");
    setAccept(false);
    setAmount_of_loan(null);
    setKey_points("");
    setIntroduction("");
  };

  const BlueRadio = withStyles({
    root: {
      color: lightBlue[100],
      "&$checked": {
        color: lightBlue[200],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  return (
    <>
      {loading ? <Loader /> : null}
      <Banner>
        <p className={BannerStyle.smallHeading}>Request business loan</p>

        <p style={{ marginTop: "3rem" }} className={BannerStyle.BigHeading}>
          Request
          <br></br>
          business <br></br>
          loan
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
                className={style.halfInputTag}
                placeholder="First Name"
                value={firstName}
              />
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                className={style.halfInputTag}
                placeholder="Last Name"
                value={lastName}
              />
            </div>
            <div className={style.subPersonalInfoDiv}>
              <input
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                type="number"
                className={style.halfInputTag}
                placeholder="Phone No including Extension"
                value={mobile}
                min="0"
              />
              <select
                onChange={(e) => setRole(e.target.value)}
                className={style.halfSelectTag}
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
                className={style.halfInputTag}
                placeholder="Email address"
                value={email}
              />
              <input
                onChange={(e) => {
                  setConfirmEmail(e.target.value);
                }}
                className={style.halfInputTag}
                placeholder="Confirm your email"
                value={confirmEmail}
              />
            </div>
            <div className={style.acceptStatement}>
              <input
                className={style.checkIcon}
                type="checkbox"
                // onChange={checkAccept}
                onChange={(e) => {
                  setAccept((prev) => !prev);
                }}
                // value={accept}
                checked={accept}
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
                className={style.halfSelectTag}
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
            Fill below information
          </p>
          <div className={style.personalCompanyInfo}>
            <div className={style.subPersonalInfoDivRadio}>
              <p className={style.inputFieldLabel}>
                Do you a fresh business idea?
              </p>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={fresh_business}
                  onChange={(e) => setFresh_business(e.target.value)}
                >
                  <FormControlLabel
                    value="true"
                    control={<BlueRadio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="false"
                    control={<BlueRadio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className={LayoutStyle.spacer}></div>

            <div className={style.subPersonalInfoDivRadio}>
              <p className={style.inputFieldLabel}>Are you a startup?</p>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={is_startup}
                  onChange={(e) => setIs_startup(e.target.value)}
                >
                  <FormControlLabel
                    value="true"
                    control={<BlueRadio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="false"
                    control={<BlueRadio />}
                    selected
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className={LayoutStyle.spacer}></div>

            {/* confrimEmailErr ? style.styleErr : style.halfInputTag */}
            <div className={style.subPersonalInfoDiv2}>
              <p className={style.inputFieldLabel}>
                Its been how long you are maintaining this business (in months)?
              </p>
              <input
                onChange={(e) => setAge(e.target.value)}
                type="number"
                value={age}
                style={{ width: "100%" }}
                className={style.halfInputTag}
                placeholder="Its been how long you are maintaining this business?"
              />
            </div>
            <div className={LayoutStyle.spacer}></div>
            <div className={style.subPersonalInfoDiv2}>
              <p className={style.inputFieldLabel}>
                Give a brief introduction about your business?
              </p>
              <textarea
                className={style.textareaTag}
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
                style={{ minHeight: "2rem", width: "100%" }}
                placeholder="Give a brief introduction about your business?"
              ></textarea>
            </div>
            <div className={LayoutStyle.spacer}></div>
            <div className={style.subPersonalInfoDiv2}>
              <p className={style.inputFieldLabel}>Select Loan of amount</p>

              <select
                onChange={(e) => setAmount_of_loan(e.target.value)}
                style={{ width: "100%" }}
                className={style.fullSelectTag}
                value={amount_of_loan}
              >
                <option
                  className={style.dropdownElement}
                  value=""
                  selected={amount_of_loan == null}
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
            <div className={LayoutStyle.spacer}></div>
            <div className={style.subPersonalInfoDiv2}>
              <p className={style.inputFieldLabel}>
                What are the key points of your business that can help your
                customer's or solves any existing problem in the community, city
                or country.?
              </p>
              <textarea
                className={style.textareaTag}
                value={key_points}
                onChange={(e) => setKey_points(e.target.value)}
                style={{ width: "100%" }}
                placeholder="What are the key points of your business that can help your customer's or solves any existing problem in the community, city or country.?"
              ></textarea>
            </div>

            {isLoading && (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
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

export default BusinessLoan;
