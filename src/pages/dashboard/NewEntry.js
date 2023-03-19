import React, { useState } from "react";
import styles from "./styles/newEntryStyles.module.css";
import Button from "../../../src/components/Button";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const formFields = [
  {
    question: "Name of restaurant",
    inputType: "text",
    id: "restaurantName",
    placeholder: 'Enter the restaurant name'
  },
  {
    question: "Address",
    inputType: "text",
    id: "address",
    placeholder: 'Enter the address'
  },
  {
    question: "Hygienity Score",
    inputType: "number",
    id: "hygienityScore",
    placeholder: 'Enter hygienity score'
  },
  {
    question: "Nutrients Score",
    inputType: "number",
    id: "nutrientsScore",
    placeholder: 'Enter nutrients score'
  },
];

const NewEntry = () => {
  const [formData, setFormData] = useState({
    restaurantName: "",
    address: "",
    hygienityScore: null,
    nutrientsScore: null,
  });

  const navigate = useNavigate();

  const handleFormInput = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prev) => {
      let newObj = { ...prev };
      newObj[`${fieldName}`] = value;
      return newObj;
    });
  };

  const onClickBackButton = () => {
    navigate("/user-dashboard");
  };

  return (
    <div className={styles.wrapper}>
      <BsArrowLeftCircleFill onClick={onClickBackButton} />
      <div className={styles.title}>Create A New Entry</div>
      <div className={styles.formBody}>
        <div className={styles.formQuestions}>
          {formFields.map((field) => {
            return <div className={styles.formQuestion}>{field.question}</div>;
          })}
        </div>
        <div className={styles.formInputs}>
          {formFields.map((field) => {
            return (
              <div className={styles.formInput}>
                <input
                  type={field.inputType}
                  value={formData[`${field.id}`]}
                  placeholder={field.placeholder}
                  onChange={(e) => handleFormInput(e, field.id)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewEntry;
