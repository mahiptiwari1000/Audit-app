import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/cardStyles.module.css";

const CardForEntries = ({
  title,
  date,
  description,
  id,
  keyword,
  createdBy = "Mahip",
}) => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.dataWrapper}>
        <div className={styles.profilePic}>
          <img src={"https://picsum.photos/200"} className={styles.profileImage} alt="Reviewer" />
        </div>
        <div className={styles.details}>
          <div className={styles.formDateStyle}>{date}</div>
          <div className={styles.formTitleStyle}>{title}</div>
          <div className={styles.formReviewerStyle}>{createdBy}</div>
        </div>
      </div>
    </div>
  );
};
export default CardForEntries;
