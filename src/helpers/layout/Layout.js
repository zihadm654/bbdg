import styles from "./layout.module.css";

function Layout({ children }) {
  return (
    <>
      {/* < CustomHead /> */}
      <div className={styles.supremediv}>{children}</div>
    </>
  );
}

export default Layout;
