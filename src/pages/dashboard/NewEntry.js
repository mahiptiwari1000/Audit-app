import React, { useState } from "react";
import styles from "./styles/newEntryStyles.module.css";
import Button from "../../../src/components/Button";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { gradingData } from "../../utils/constants";
import { scoreData } from "../../utils/constants";

const formFields = [
  {
    question: "FBO Name",
    inputType: "text",
    id: "restaurantName",
    placeholder: "Enter the restaurant name",
  },
  {
    question: "Audit Name",
    inputType: "text",
    id: "auditorName",
    placeholder: "Enter the auditor name",
  },
  {
    question: "FBO's representative",
    inputType: "text",
    id: "fboRepresentativeName",
    placeholder: "Representative name",
  },
  {
    question: "Address",
    inputType: "text",
    id: "address",
    placeholder: "Enter the address",
  },
  {
    question: "FBO License No",
    inputType: "number",
    id: "licenseNo",
    placeholder: "Enter License No",
  },
  {
    question: "Date",
    inputType: "number",
    id: "dateOfAudit",
    placeholder: "Date of Audit",
  },
];

const NewEntry = () => {
  const [formData, setFormData] = useState({
    restaurantName: "",
    auditorName: "",
    fboRepresentativeName: "",
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
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>Create A New Entry</div>
        <div className={styles.formBody}>
          <div className={styles.formQuestions}>
            {formFields.map((field) => {
              return (
                <div className={styles.formQuestion}>{field.question}</div>
              );
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
      <div className="table-style">
        <caption>Grading Data</caption>
        <table>
          {gradingData.map((d) => {
            return (
              <tr>
                <td>{d.grade}</td>
                <td>{d.range}</td>
                <td>{d.category}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="table-style">
        <table>
          <tr>
            <th>S.No</th>
            <th>Audit Areas</th>
            <th>Max Score</th>
            <th>Obtained Score</th>
          </tr>
          {scoreData.map((d) => {
            return (
              <tr>
                <td>{d.sno}</td>
                <td>{d.auditAreas}</td>
                <td>{d.maxScore}</td>
                <td>{d.obtainedScore}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default NewEntry;
