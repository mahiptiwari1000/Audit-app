import React from "react";
import styles from "./styles/forms.module.css";
import Icons from "../../themes/Icons";

function Forms(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dashboardWrapper}>
        <div className={styles.headerSection}>
          <div className={styles.titleSection}>
            <div className={styles.title}>Dashboard</div>
            <div className={styles.icon}>
              <img src={Icons.SEARCH} alt="Search icon" />
            </div>
          </div>
          <div className={styles.subHeaderSection}>
            <div className={styles.newEntry}>
              <div className={styles.newEntryText}>Create Form</div>
            </div>
          </div>
        </div>
        <div className={styles.bodySection}>No Forms Yet!!!</div>
      </div>
    </div>
  );
}

export default Forms;
