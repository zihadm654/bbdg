import { React, useState } from "react";
import style from "./StayUpdated.module.css";
import BannerStyle from "../../helpers/Banner/Banner.module.css";
import LayoutStyle from "../../helpers/layout/layout.module.css";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import { useRouter } from "next/router";
import axios from "axios";
import Modal from "../../helpers/Modal/Modal";
import validator from 'validator' 
const StayUpdated = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organization, setOrganization] = useState("");
  // const [extension, setExtension] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [globalMessage, setGlobalMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const [fnameErr,setFNameErr]=useState(false)
  const [lnameErr,setLNameErr]=useState(false)
  const [phoneErr,setPhoneErr]=useState(false)
  const [emailErr,setEmailErr]=useState(false)

  const router = useRouter();

  const submitData = async (e) => {
    e.preventDefault();
    if (
      firstName.length < 1 ||
      mobile.length < 1 ||
      email.length < 1 ||
      // extension.length < 1 ||
      lastName.length < 1 ||
      organization.length < 1
    ) {
      setGlobalMessage("All fields are required");
      setIsVisible(true);
    }
    else if(!checkName(lastName)){
      setGlobalMessage("last name should be an alphabet");
      setIsVisible(true);
      setEmailErr(false);
      setFNameErr(false);
      setLNameErr(true);
      setPhoneErr(false);

    }
    else if(!checkPhone(mobile)){
      setGlobalMessage("please enter a valid phone number");
      setIsVisible(true);
      setPhoneErr(true);
      setEmailErr(false);
      setFNameErr(false);
      setLNameErr(false);
      
      }
    else if(!checkEmail(email)){
      setGlobalMessage("please enter a valid email");
      setIsVisible(true);
      setEmailErr(true);
      setFNameErr(false);
      setLNameErr(false);
      setPhoneErr(false);

    }
    else if(!checkName(firstName)){
      setGlobalMessage("first name should be an alphabet");
      setIsVisible(true);
      setEmailErr(false);
      setFNameErr(true);
      setLNameErr(false);
      setPhoneErr(false);
     
    }
    
     else {
      await axios
        .post("https://bbdg-backend.herokuapp.com/newsletter/create", {
          first_name: firstName,
          last_name: lastName,
          email,
          organization_or_media: organization,
          telephone_with_extension: mobile,
          // telephone_with_extension: extension + mobile,
        })
        .then(() => {
          setLastName("");
          setEmail("");
          setMobile("");
          setFirstName("");
          // setExtension("");
          setOrganization("");
          setEmailErr(false);
          setFNameErr(false);
          setLNameErr(false);
          setPhoneErr(false);
          setGlobalMessage("Your request has been sent!");
          setIsVisible(true);
        })
        .catch((error) => {
          alert("Error:", error)
          console.log(error)
        });
    }
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };
  const checkName=(check_Name) => {
    const isvalidName=validator.isAlpha(check_Name)
    return isvalidName
  }

const checkEmail=(check_email) => {
      const isvalidEmail=validator.isEmail(check_email)
      return isvalidEmail
}
const checkPhone=(check_phone) => {
    const isvalidPhone=validator.isMobilePhone(check_phone)
      return isvalidPhone
    
  }
  return (
    <>
      <div className={LayoutStyle.RootDiv + " " + style.mainDiv}>
        <div className={style.formDiv}>
          <p className={BannerStyle.BigHeading + " " + style.heading}>
            STAY UPDATED{" "}
          </p>
          {isVisible && <Modal message={globalMessage} />}
          <div className={style.personalInfo}>
            <input
              className={fnameErr?style.styleErr:style.halfInputTag}
              value={firstName}
              onChange={(e)=>{setFirstName(e.target.value)}}
              placeholder="First Name"
            />
            <input
              className={lnameErr?style.styleErr:style.halfInputTag}
              value={lastName}
              onChange={(e)=>{setLastName(e.target.value)}}
              placeholder="Last Name"
            />

            <input
              className={style.halfInputTag}
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder="Organization / Media"
            />
            <div className={style.telephoneDiv}>
              <input
                style={{ width: "100%" }}
                value={mobile}
                onChange={(e)=>setMobile(e.target.value)}
                className={phoneErr?style.styleErr:style.halfInputTag}
                placeholder="Mobile"
              />
              {/* <input
                style={{ width: "30%" }}
                value={mobile}
                onChange={checkMobile}
                className={style.halfInputTag}
              /> */}
            </div>
            
            <input
              required
              type="email"
              className={emailErr?style.styleErr:style.halfInputTag}
              placeholder="Email Address"
              autoComplete="none"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <div onClick={submitData} className={style.btnSection}>
              <SecondaryButton text="Submit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StayUpdated;
