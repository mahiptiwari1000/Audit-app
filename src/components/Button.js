import React from "react";
import styles from "./styles/buttonStyles.module.css";

const Button = (props) => {
  const { onClick, title, btnWidth = 100 } = props;
  return (
    <div
      onClick={onClick}
      className={styles.btn}
      style={{ width: `${btnWidth}px` }}
    >
      {props.startIcon} {title}
    </div>
  );
};

export default Button;
