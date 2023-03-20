import React from "react";
import styles from "./styles/dashboardStyles.module.css";
import { useNavigate } from "react-router-dom";
import { SiSpringboot } from "react-icons/si";
import Button from "../../../src/components/Button";
import Icons from "../../themes/Icons";
import Navbar from "../../components/Navbar";

const UserDashboard = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    navigate("/");
  };

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
          <div className={styles.newEntry} onClick={onClickNewEntry}>
            <div className={styles.newEntryText}>New Entry</div>
          </div>
        </div>
        <div className={styles.bodySection}>No Entries Yet!!!</div>
      </div>
    </div>
  );
};

export default UserDashboard;
