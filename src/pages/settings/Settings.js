import React from "react";
import styles from "./styles/settings.module.css";
import { useNavigate } from "react-router-dom";

function Settings(props) {
  const navigate = useNavigate();

  const onClickCreateANewUser = (e) => {
    navigate("/sign-up");
  };
  return (
    <div className={styles.newEntry}>
      <div
        className={styles.newEntryText}
        onClick={(e) => onClickCreateANewUser(e)}
      >
        Create a New User
      </div>
    </div>
  );
}

export default Settings;
