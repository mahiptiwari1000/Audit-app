import React, { useState } from 'react';
import styles from './styles/dashboardStyles.module.css';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import {FcHeadset} from "react-icons/fc" 


const UserDashboard = () => {

    const navigate = useNavigate();

    const onClickLogout = () => {
        navigate('/')
    }

    return (
        <div className={styles.wrapper}>
            <FcHeadset onClick={onClickLogout}/>
            <div className={styles.title}>
                    User Dashboard
            </div>
            <button className={styles.btn1}>New Entry</button>
            <button className={styles.btn2}>List of Previous Entries</button>
        </div>
    );
}

export default UserDashboard;
