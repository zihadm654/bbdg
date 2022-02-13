import React, { useState } from "react";
import style from "./SendMessage.module.css";
import axios from "axios";
import Modal from "../helpers/Modal/Modal";
import SecondaryButton from "./Buttons/SecondaryButton";
// import isEmail from 'validator/es/lib/isEmail';
import validator from "validator";

const ContactUs = () => {
  // const [xlocation, setxlocation] = useState(location);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [globalMessage, setGlobalMessage] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const submitData = async (e) => {
    e.preventDefault();
    if (
      name.length < 1 ||
      phone.length < 1 ||
      email.length < 1 ||
      subject.length < 1 ||
      message.length < 1
    ) {
      setGlobalMessage("All fields are required");
      setIsVisible(true);
    } else if (!checkemail(email)) {
      setGlobalMessage("please enter a valid email");
      setIsVisible(true);
      setEmailErr(true);
      setNameErr(false);
      setPhoneErr(false);
    } else if (!checkPhone(phone)) {
      setGlobalMessage("please enter a valid phone Number");
      setIsVisible(true);
      setPhoneErr(true);
      setEmailErr(false);
      setNameErr(false);
    } else {
      await axios
        .post("https://bbdg-backend.herokuapp.com/help", {
          name,
          email,
          phone,
          subject,
          message,
        })
        .then(() => {
          setMessage("");
          setName("");
          setEmail("");
          setSubject("");
          setPhone("");
          setMessage("");
          setNameErr(false);
          setEmailErr(false);
          setPhoneErr(false);
          setGlobalMessage("Your request has been sent!");

          setIsVisible(true);
        })
        .catch((e) => alert("Error", e));
    }
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  const checkemail = (check_email) => {
    const isvalidEmail = validator.isEmail(check_email);
    return isvalidEmail;
  };
  const checkPhone = (check_phone) => {
    const isvalidPhone = validator.isMobilePhone(check_phone);
    return isvalidPhone;
  };

  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.contactInfo}>
          <p className={style.heading}>WE’RE ALWAYS HERE TO HELP YOU</p>
          <p className={style.subHeading}>
            There are many variatns of passages the majority have suffered
            alteration in some foor randomised words believable.
          </p>
          {/* <div className={style.infoElementDiv}>
            <i className={"fas fa-map-marker-alt " + style.infoIcon}></i>
            <div className={style.infoElement}>
              <p className={style.infoHeading}>VISIT US</p>
              <p className={style.infoData}>66 Broklyn Street, New York. USA</p>
            </div>
          </div> */}
          <div className={style.infoElementDiv}>
            <i className={"fas fa-envelope " + style.infoIcon}></i>
            <div className={style.infoElement}>
              <p className={style.infoHeading}>EMAIL ADDRESS</p>
              <p className={style.infoData}>info@bbdg.ca</p>
            </div>
          </div>
          <div className={style.infoElementDiv}>
            <i className={"fas fa-phone-alt " + style.infoIcon}></i>
            <div className={style.infoElement}>
              <p className={style.infoHeading}>CALL NOW</p>
              <p className={style.infoData}> +1 863 666 7029</p>
            </div>
          </div>
        </div>
        <div className={style.contactForm}>
          {isVisible && <Modal message={globalMessage} />}
          <div className={style.inputDiv}>
            <input
              required
              type="text"
              className={nameErr ? style.styleErr : style.inputTag}
              placeholder="Your Name"
              autoComplete="none"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <input
              required
              className={emailErr ? style.styleErr : style.inputTag}
              placeholder="Email Address"
              autoComplete="none"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <div className={style.inputDiv}>
            <input
              required
              type="text"
              className={phoneErr ? style.styleErr : style.inputTag}
              placeholder="Phone Number"
              autoComplete="none"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></input>
            <input
              required
              type="text"
              className={style.inputTag}
              placeholder="Subject"
              autoComplete="none"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            ></input>
          </div>
          <div className={style.inputDiv}>
            <textarea
              className={style.textareaTag}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div onClick={submitData} className={style.buttonMargin}>
            <SecondaryButton text="Send Message" />
          </div>
        </div>
      </div>
      {/* {xlocation ? (
        <div className={style.mapLocation}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.827616143312!2d-73.94663258522839!3d40.677767047647244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b84547857e3%3A0x2e1b27396ef429f!2s66%20Brooklyn%20Ave%2C%20Brooklyn%2C%20NY%2011216%2C%20USA!5e0!3m2!1sen!2sin!4v1622625865244!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      ) : (
        <></>
      )} */}
    </>
  );
};

export default ContactUs;
