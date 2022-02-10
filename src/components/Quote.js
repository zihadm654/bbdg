import styles from "./Quote.module.css"
const Quote = ({ text = "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour" }) => {
    return (
        <div className={styles.bgimg}>
            <div
                className={
                    styles.portfoliotxt +
                    " d-flex align-items-center justify-content-center"
                }
            >

                <h3 >
                    <span className={styles.bgquote}>‘‘</span>

                    <span className={styles.bgtitle}>

                        {text}
                        {/* There are many variations of passages of lorem ipsum available, but
                        the majority have suffered alteration in some form, by injected
                        humour */}
                    </span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <span className={styles.proStaff}>PROFESSIONAL STAFF</span>
                </h3>

            </div>
        </div>

    );
}

export default Quote;