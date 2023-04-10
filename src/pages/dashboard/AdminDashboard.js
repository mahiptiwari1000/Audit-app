import React, { useEffect, useState } from "react";
import styles from "./styles/dashboardStyles.module.css";
import { useNavigate } from "react-router-dom";
import { SiSpringboot } from "react-icons/si";
import Button from "../../../src/components/Button";
import Icons from "../../themes/Icons";
import Navbar from "../../components/Navbar";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const onClickNewEntry = () => {
    navigate("/new-entry");
  };

  return (
    <div className={styles.wrapper}>
      <Navbar activeItem={"Home"} />
      <div className={styles.dashboardWrapper}>
        <div className={styles.headerSection}>
          <div className={styles.titleSection}>
            <div className={styles.title}>Dashboard</div>
            <div className={styles.icon}>
              <img src={Icons.SEARCH} alt="Search icon" />
            </div>
          </div>
          <div className={styles.subHeaderSection}>
            <div className={styles.newEntry} onClick={onClickNewEntry}>
              <div className={styles.newEntryText}>Create a New Entry</div>
            </div>
          </div>
        </div>
        <div className={styles.bodySection}>No Entries Yet!!!</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
