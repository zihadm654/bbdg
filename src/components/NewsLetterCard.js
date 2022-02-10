import axios from "axios";
import { useState } from "react";
import style from "./NewsLetterCard.module.css"
import { BaseApi } from "../utils/utils"
import validator from "validator";
const NewsLetterCard = ({ heading, subHeading, id }) => {
    const [errMsg, setErrMsg] = useState("")
    const [isSubmited, setIsSubmited] = useState(false);
    const [email, setEmail] = useState("");

    const submit = () => {

        if (email.length <= 0) {
            setErrMsg("Please provide email")
        }
        else if (!validator.isEmail(email)) {
            setErrMsg("Please provide a valid email")
        }
        else {
            setErrMsg("Submitting...")
            axios({
                method: 'post',
                url: `${BaseApi}/newsletterandeventletters/addemail/${id}`,
                data: {
                    email: email
                }
            })
                .then(res => {
                    setIsSubmited(true)
                    setEmail("");
                    setErrMsg("");
                })
                .catch((e) => {
                    console.log(e)
                    setErrMsg("Something went wrong...")
                });
        }
    }
    return (
        <>
            <div className={style.mainDiv}>
                <div className={style.content}>
                    <p className={style.heading}>{heading}</p>
                    <p className={style.subHeading}>{subHeading}</p>
                </div>
                <div className={style.emailField}>
                    <div className={style.emailInput}>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className={style.emailInputField} placeholder="Email Address" />
                        <div onClick={() => submit()} className={style.submitDiv}>
                            <i className='fas fa-chevron-right'></i>
                        </div>
                    </div>
                    <p className={style.errMsg}>{errMsg}</p>
                </div>
            </div>
            <div className={isSubmited ? style.submitMsg : style.hidden}>
                <div className={style.contentDiv}>
                    <i onClick={() => setIsSubmited(false)} className={"fas fa-times " + style.crossIcon}></i>
                    <p className={style.msgHeading}>great! you have subscribed to our  newsletter!</p>
                    <p className={style.msgTxt}>Subscribe to receive, via email, tips, articles and tools for entrepreneurs and more information about our solutions and events. You can withdraw your consent at any time.</p>
                </div>
            </div>
        </>
    )
}

export default NewsLetterCard;