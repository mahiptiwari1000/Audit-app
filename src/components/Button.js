import React from 'react';
import styles from './styles/buttonStyles.module.css';

const Button = (props) => {

    return (
        <div>
            <button className={styles.btn} onClick={props.onClick}>{props.title}</button>
        </div>
    );
}

export default Button;
