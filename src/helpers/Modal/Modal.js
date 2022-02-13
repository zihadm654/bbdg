import style from "./Modal.module.css";

function Modal({ message = "Your message has been saved successfully" }) {
  // const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  // setTimeout(() => {
  // setIsVisible(false);
  // }, 5000);

  // return () => {
  // setIsVisible(true);
  // };
  // }, []);

  return (
    // <div style={isVisible ? { display: "block" } : { display: "none" }}>
    <>
      <div className={style.blueContainer}>
        <p className={style.text}>{message}</p>
      </div>
    </>
  );
}

export default Modal;
