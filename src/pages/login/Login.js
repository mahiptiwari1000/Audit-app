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
import { useSignIn } from "react-auth-kit";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [openBackdrop, setOpenBackdrop] = React.useState(false);
  const signIn = useSignIn();
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
    setOpenBackdrop(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        console.log(userCredential);
        if (
          userEmail === "admin@greentick.com" &&
          userPassword === "admin123"
        ) {
          signIn({
            token: "eyJz93a...k4laUWw",
            expiresIn: 3600,
            tokenType: "admin",
            authState: { email: userEmail },
          });
          navigate("/admin-dashboard");
          setUserEmail("");
          setUserPassword("");
        } else {
          signIn({
            token: "eyJz93a...k4laUWw",
            expiresIn: 3600,
            tokenType: "user",
            authState: { email: userEmail },
          });
          navigate("/user-dashboard");
          setUserEmail("");
          setUserPassword("");
        }
        setLoading(false);
        setOpenBackdrop(false);
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
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={openBackdrop}
              >
                <CircularProgress color="success" />
              </Backdrop>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
