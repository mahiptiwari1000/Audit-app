import React, { useState } from "react";
import styles from "./styles/modalStyles.module.css";
import { RiCloseLine } from "react-icons/ri";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import Alert from '@mui/material/Alert';
import { auth } from "../firebase";
import Button from "./Button";

const Modal = ({ setIsOpen, isOpenSnackBar = {} }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onClickSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        console.log(userCredential);
        isOpenSnackBar();
      })
      .catch((error) => {
        console.log(error);
      });
    setIsOpen(false);
  };
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Add User</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.inputFields}>
              <h3 className={styles.fieldTitle}>Email</h3>
              <input
                type="text"
                value={userEmail}
                placeholder="Enter your email"
                onChange={(e) => setUserEmail(e.target.value)}
                style={{ marginBottom: "3vh" }}
              />
              <h3 className={styles.fieldTitle}>Password</h3>
              <input
                type="password"
                value={userPassword}
                placeholder="Enter your password"
                onChange={(e) => setUserPassword(e.target.value)}
              />
              {/* {!isValid && (
              <div className={styles.errorMessage}>
                Invalid username or password
              </div>
            )} */}
            </div>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.deleteBtn}
                onClick={(e) => onClickSignUp(e)}
              >
                Create
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
