import React, { useEffect, useState } from "react";
import styles from "./styles/dashboardStyles.module.css";
import { useNavigate } from "react-router-dom";
import { SiSpringboot } from "react-icons/si";
import Button from "../../../src/components/Button";
import Icons from "../../themes/Icons";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import styled from "styled-components";
import { FaCommentAlt, FaThumbsUp, FaRegEye } from "react-icons/fa";
import { entryData } from "../../utils/constants";
import CardForEntries from "../../components/Card";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const onClickNewEntry = () => {
    navigate("/new-entry");
  };

  return (
    <div className={styles.wrapper}>
      <Navbar activeItem={"Home"} />
      <div className={styles.dashboardWrapper}>
        <div className={styles.headerSection}>
          <div className={styles.titleSection}>
            <div className={styles.title}>Dashboard</div>
            <div className={styles.icon}>
              <img src={Icons.SEARCH} alt="Search icon" />
            </div>
          </div>
          <div className={styles.subHeaderSection}>
            <div className={styles.newEntry} onClick={onClickNewEntry}>
              <div className={styles.newEntryText}>Create Entry</div>
            </div>
          </div>
        </div>
        <div className={styles.bodySection}>
          <p>Existing Entries:</p>
          {entryData.map((d) => (
            <CardForEntries
              key={d.title}
              title={d.title}
              date={d.date}
              description={d.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
