import React, { useState } from "react";
import styles from "./styles/loginStyles.module.css";
import { useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import Images from "../../themes/Images";
import Button from "../../components/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import Alert from '@mui/material/Alert';
import { auth } from "../../../src/firebase";

const Signup = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const onClickSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {isLoading && (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
          className={styles.loader}
        />
      )}
      <div className={styles.wrapper}>
        <div className={styles.companyLogo}>
          <img
            src={Images.GREEN_TICK_PVT_LTD_LOGO}
            alt="Green tick private limited logo"
          />
        </div>
        <div className={styles.loginFormBody}>
          <div className={styles.title}>Signup Page</div>
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
            <div className={styles.signInButton}>
              <Button title={"Sign Up"} onClick={(e) => onClickSignUp(e)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
