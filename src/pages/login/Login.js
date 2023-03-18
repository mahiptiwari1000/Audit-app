import React, { useState } from 'react';
import styles from './styles/loginStyles.module.css';
import { useNavigate } from "react-router-dom";
import { BallTriangle } from 'react-loader-spinner'

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();

    const onClickSignIn = () => {
        setIsLoading(true);
        if (userEmail == 'user@gmail.com' && userPassword == 'user@123') {
                navigate('/user-dashboard');
                setIsLoading(false);
        }
        else {
                setIsLoading(false);
        }
    }

    return (
        <>
            {isLoading && <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
                className={styles.loader}
            />}
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    Welcome Back
                </div>
                <div className={styles.inputFields}>
                    <h3 className={styles.fieldTitle}>Email</h3>
                    <input type="text" value={userEmail} placeholder="Enter your email" onChange={(e) => setUserEmail(e.target.value)} />
                    <h3 className={styles.fieldTitle}>Password</h3>
                    <input type="password" value={userPassword} placeholder="Enter your password" onChange={(e) => setUserPassword(e.target.value)} />
                    <button className={styles.btn} onClick={onClickSignIn}>Sign In</button>
                </div>
            </div>
        </>
    );
}

export default Login;
