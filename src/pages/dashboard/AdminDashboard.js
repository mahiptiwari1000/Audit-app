import React from "react";
import styles from "./styles/dashboardStyles.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../../src/components/Button";
import { SiSpringboot } from "react-icons/si";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    navigate("/");
  };

  const onClickNewEntry = () => {
    navigate("/new-entry");
  };

  const onClickNewForm = () => {
    console.log("New form");
  };

  return (
    <div className={styles.wrapper}>
      <SiSpringboot onClick={onClickLogout} />
      <div className={styles.title}>Admin Dashboard</div>
      <Button title={"Create a New Form"} onClick={onClickNewForm}></Button>
      <Button title={"New Entry"} onClick={onClickNewEntry}></Button>
      <Button title={"List of Previous Entries"}></Button>
    </div>
  );
};

export default AdminDashboard;
