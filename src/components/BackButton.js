import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import styles from "./styles/buttonStyles.module.css";
import Button from "./Button";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Button title={"Back"} onClick={handleBack} startIcon={<ArrowBackIcon />} />
  );
};

export default BackButton;
