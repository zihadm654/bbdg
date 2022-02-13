import { Row, Col } from "react-bootstrap";
import styles from "./QualityService.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function QualityService(IndicatorArray) {
  const IndicatorData = IndicatorArray.IndicatorArray;
  const CircularProgress = IndicatorData.map((data) => {
    return (
      <div className={styles.progressDiv}>
        <CircularProgressbar
          strokeWidth={3}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "round",
            textSize: "1.2rem",
            pathTransitionDuration: 0.5,
            pathColor: `#7ABAF7`,
            textColor: "#163653",
            trailColor: "none",
          })}
          value={data.percentage}
          text={`${data.percentage}%`}
        />
        <p>{data.subHeading}</p>
      </div>
    );
  });
  return (
    <>
      <Row className={styles.QScontainer}>
        <Col md={2}></Col>
        <Col md={4} className={styles.QSheading + " px-5"}>
          <p className={styles.QStext}>WE ARE STANDOUT EXPERTS IN BUSINESS</p>
          <p className={styles.QSsubtext}>
            We believe that success is achieved through a highly collaborative
            interactions, so that we can work together to identify and envaluate
            opportunities beyond your current operations.
          </p>
          <div className={styles.indicators}>{CircularProgress}</div>
        </Col>
        <Col md={4} className={styles.QScardcontainer}>
          <img
            className={styles.QSimgcontainer}
            src="../assets/images/man.png"
            alt="man"
          />
        </Col>
        <Col md={2}></Col>
      </Row>
    </>
  );
}

export default QualityService;
