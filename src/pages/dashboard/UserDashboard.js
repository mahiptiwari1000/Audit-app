import React, { useEffect, useState } from "react";
import styles from "./styles/dashboardStyles.module.css";
import { useNavigate } from "react-router-dom";
import { SiSpringboot } from "react-icons/si";
import Button from "../../../src/components/Button";
import Icons from "../../themes/Icons";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

const UserDashboard = () => {
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const onClickLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
    navigate("/");
  };

  const onClickNewEntry = () => {
    navigate("/new-entry");
  };

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
            <div className={styles.newEntry} onClick={onClickNewEntry}>
              <div className={styles.newEntryText}>New Entry</div>
            </div>
            <div className={styles.logout} onClick={onClickLogout}>
              <div className={styles.logoutText}>Logout</div>
            </div>
          </div>
        </div>
        <div className={styles.bodySection}>No Entries Yet!!!</div>
      </div>
    </div>
  );
};

export default UserDashboard;
