import { Row, Col } from "react-bootstrap";
import styles from "./portfolio.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Portfolio(IndicatorArray) {
  // console.log(IndicatorArray.IndicatorArray)
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
      <div className={styles.bgimg}>
        <div
          className={
            styles.portfoliotxt +
            " d-flex align-items-center justify-content-center"
          }
        >
          <h3>
            <span className={styles.bgquote}>‘‘</span>

            <span className={styles.bgtitle}>
              There are many variations of passages of lorem ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </span>
            <br></br>
            <br></br>
            <br></br>
            <span className={styles.proStaff}>PROFESSIONAL STAFF</span>
          </h3>
        </div>
      </div>
      <Row className={styles.biocontainer}>
        <Col md={2}></Col>
        <Col md={4} className={styles.bioheading + " px-5"}>
          <p className={styles.biotext}>WE ARE STANDOUT EXPERTS IN BUSINESS</p>
          <p className={styles.biosubtext}>
            We believe that success is achieved through a highly collaborative
            interactions, so that we can work together to identify and envaluate
            opportunities beyond your current operations.
          </p>
          <div className={styles.indicators}>{CircularProgress}</div>
        </Col>
        <Col md={4} className={styles.cardcontainer}>
          <img className={styles.imgcontainer} src="../assets/images/man.png" />
        </Col>
        <Col md={2}></Col>
      </Row>
    </>
  );
}

export default Portfolio;
