import React, { useState } from 'react';
import styles from './styles/dashboardStyles.module.css';
import { useNavigate } from 'react-router-dom';
import { SiSpringboot } from "react-icons/si";
import Button from '../../../src/components/Button';


const UserDashboard = () => {

    const navigate = useNavigate();

    const onClickLogout = () => {
        navigate('/')
    }

    const onClickNewEntry = () => {
        navigate('/new-entry')
    }

    return (
        <div className={styles.wrapper}>
            <SiSpringboot onClick={onClickLogout}/>
            <div className={styles.title}>
                    User Dashboard
            </div>
            <Button title={"New Entry"} onClick={onClickNewEntry}></Button>
            <Button title={"List of Previous Entries"}></Button>
        </div>
    );
}

export default UserDashboard;
