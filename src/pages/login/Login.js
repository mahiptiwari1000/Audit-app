import React, { useState, useEffect } from "react";
import styles from "./styles/loginStyles.module.css";
import { useNavigate } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import Images from "../../themes/Images";
import Button from "../../components/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import Alert from '@mui/material/Alert';
import { auth } from "../../../src/firebase";
import ProgressBar from "../../components/ProgressBar";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const loadingDuration = 3000; // 3 seconds

  const navigate = useNavigate();

  useEffect(() => {
    let loadingTimeout = setTimeout(() => {
      if (loading >= 100) return;
      setProgress(progress + 1);
    }, loadingDuration / 100);

    if (progress === 100) {
      setLoading(false);
    }

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [progress, loading]);

  const onClickSignIn = (e) => {
    setLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        console.log(userCredential);
        if (
          userEmail === "admin@greentick.com" &&
          userPassword === "admin123"
        ) {
          navigate("/admin-dashboard");
        } else {
          navigate("/user-dashboard");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const onClickCreateANewUser = (e) => {
    navigate("/sign-up");
  };

  return (
    <>
      {loading ? (
        <ProgressBar progress={progress} trackWidth={5} indicatorWidth={10} />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.companyLogo}>
            <img
              src={Images.GREEN_TICK_PVT_LTD_LOGO}
              alt="Green tick private limited logo"
            />
          </div>
          <div className={styles.loginFormBody}>
            <div className={styles.title}>Login Page</div>
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
                <Button title={"Sign In"} onClick={(e) => onClickSignIn(e)} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
