import React, { useState } from "react";
import styles from "./styles/newEntryStyles.module.css";
import Button from "../../../src/components/Button";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function NewForm() {
  const [formData, setFormData] = useState({
    restaurantName: "",
    auditorName: "",
    fboRepresentativeName: "",
    address: "",
    licenseNo: null,
    dateOfAudit: null,
  });

  const [inputValue, setInputValue] = useState("");
  const [inputTypeValue, setInputTypeValue] = useState("");

  const navigate = useNavigate();

  const handleFormInput = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prev) => {
      let newObj = { ...prev };
      newObj[`${fieldName}`] = value;
      return newObj;
    });
  };

  const handleInput = (e) => {
    const { value: input } = e.target;
    setInputValue(input);
  };

  const handleInputType = (e) => {
    const { value: input } = e.target;
    setInputTypeValue(input);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formPrompt}>Enter a Question</div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInput}
          className={styles.inputStyle}
        />
      </div>

      <div className={styles.formPrompt}>Enter the Response Type</div>
      <div>
        <input
          type="text"
          value={inputTypeValue}
          onChange={handleInputType}
          className={styles.inputStyle}
        />
      </div>
      <button>Add Another Prompt</button>
    </div>
  );
}
