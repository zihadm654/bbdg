import style from "./request-advisory-services.module.css";
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
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { BaseApi } from "../../utils/utils";
const AdvisoryServices = () => {
  const [services, setServices] = useState([]);
  const [subService, setSubService] = useState("");
  const [description, setDescription] = useState("");

  const [perma_link, setPerma_link] = useState("");
  const [childrens, setChildrens] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState();
  const [source, setSource] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [subServiceLoading, setSubServiceLoading] = useState(false);
  const [accept, setAccept] = useState(false);

  const [globalMessage, setGlobalMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    } else if (!selectedService || selectedService.length === 0) {
      setIsVisible(true);
      setGlobalMessage("please select an survice.");
    } else if (
      (selectedService != null && subService == null) ||
      subService.length === 0
    ) {
      setIsVisible(true);
      setGlobalMessage("please select an sub survice.");
    } else if (!description) {
      setIsVisible(true);
      setGlobalMessage("please fill description.");
    } else {
      // console.log("inside else");
      setIsVisible(false);
      setGlobalMessage("");
      postApi();
    }
  };

  const postApi = () => {
    axios
      .post("https://bbdg-backend.herokuapp.com/form/advisory-service", {
        firstName,
        lastName,
        email,
        phone: mobile,
        job_role: role,
        source,
        wants_updates: accept,
        parent_service: selectedService,
        child_service: subService,
        description,
      })
      .then((response) => {
        setIsVisible(true);
        setGlobalMessage("Data saved successfully");
        setIsLoading(false);
      })
      .catch((e) => console.log(e.response.data));
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
    setRole("");
    setMobile("");
    setConfirmEmail("");
    setSource("");
    setSelectedService("");
    setSubService("");
    setDescription("");
  };

  const checkAccept = (e) => {
    setAccept(e.target.checked);
    console.log(e.target.checked);
  };

  const selectServiceHandler = (value) => {
    setSelectedService(value);
    for (let i = 0; i < services.length; i++) {
      const element = services[i];
      if (value === element.heading) {
        console.log("value found for " + element.heading + " on index " + i);
        setPerma_link(element.perma_link);
        break;
      }
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const serviceResponse = await axios.get(`${BaseApi}/service/all`);
      const serviceData = await serviceResponse.data;
      setServices(serviceData.data.allChildren);
    };
    fetchData();
    if (perma_link !== "") {
      setSubServiceLoading(true);
      const updatedPermaLink = perma_link.split("/").join("+");
      axios
        .get(`${BaseApi}/service/all/${updatedPermaLink}`)
        .then((res) => {
          setSubServiceLoading(false);
          setChildrens(res.data.data.allChildren);
        })
        .catch((err) => {
          setSubServiceLoading(false);
          console.log(err);
        });
    }
  }, [perma_link]);
  console.log(services);
  return (
    <>
      <Banner>
        <p className={BannerStyle.smallHeading}>Request Advisory Services</p>

        <p style={{ marginTop: "3rem" }} className={BannerStyle.BigHeading}>
          Request
          <br></br>
          Advisory <br></br>
          Services
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
                className={style.halfInputTag}
                placeholder="Phone No including Extension"
                value={mobile}
                type="Number"
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
            <div className={style.subPersonalInfoDiv2}>
              <p className={style.inputFieldLabel}>Select service</p>

              <select
                onChange={(e) => selectServiceHandler(e.target.value)}
                style={{ width: "100%", marginTop: "-10px" }}
                className={style.fullSelectTag}
                value={selectedService}
              >
                <option
                  className={style.dropdownElement}
                  value=""
                  selected={selectedService === ""}
                >
                  Select service
                </option>
                {services?.map((data, index) => {
                  return (
                    <option
                      key={index}
                      className={style.dropdownElement}
                      value={data.heading}
                      selected={selectedService === data.heading}
                    >
                      {data.heading}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={LayoutStyle.spacer}></div>

            {subServiceLoading ? (
              <div className={style.spinnerWrapper}>
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              childrens.length > 0 && (
                <div className={style.subPersonalInfoDiv2}>
                  <p className={style.inputFieldLabel}>Select sub service</p>

                  <select
                    onChange={(e) => setSubService(e.target.value)}
                    style={{ width: "100%", marginTop: "-10px" }}
                    className={style.fullSelectTag}
                    value={subService}
                  >
                    <option
                      className={style.dropdownElement}
                      value=""
                      selected={subService === ""}
                    >
                      Select sub service
                    </option>
                    {childrens.map((data, index) => {
                      return (
                        <option
                          key={index}
                          className={style.dropdownElement}
                          value={data.heading}
                          selected={subService === data.heading}
                        >
                          {data.heading}
                        </option>
                      );
                    })}
                  </select>
                </div>
              )
            )}
            <div className={LayoutStyle.spacer}></div>

            <div className={style.subPersonalInfoDiv2}>
              <p className={style.inputFieldLabel}>
                please tell us why you need this service so we can help you in a
                better way and another details that we might need to consider
              </p>
              <textarea
                className={style.textareaTag}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ marginTop: "-10px", width: "100%" }}
                placeholder="please tell us why you need this service so we can help you in a better way and another details that we might need to consider"
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

export default AdvisoryServices;
