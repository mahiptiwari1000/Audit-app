import React, { useState } from "react";
import styles from "./styles/newEntryStyles.module.css";
import Button from "../../../src/components/Button";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const formFields = [
  {
    question: "FBO Name",
    inputType: "text",
    id: "restaurantName",
    placeholder: 'Enter the restaurant name'
  },
  {
    question:"Auditor Name",
    inputType: "text",
    id:"auditorName",
    placeholder: "Enter the auditor name"
  },
  {
    question:"FBO's representative",
    inputType:"text",
    id:"fboRepresentativeName",
    placeholder:"Representative name"
  },
  {
    question: "Address",
    inputType: "text",
    id: "address",
    placeholder: 'Enter the address'
  },
  {
    question: "FBO License No",
    inputType: "number",
    id: "licenseNo",
    placeholder: 'Enter License No'
  },
  {
    question: "Date",
    inputType: "number",
    id: "dateOfAudit",
    placeholder: 'Date of Audit'
  },
];

const NewForm = () => {
  const [formData, setFormData] = useState({
    restaurantName: "",
    auditorName:"",
    fboRepresentativeName:"",
    address: "",
    licenseNo: null,
    dateOfAudit: null,
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
      {/* <BsArrowLeftCircleFill onClick={onClickBackButton} />
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
      </div> */}
      New Form Here! 
    </div>
  );
};

export default NewForm;
