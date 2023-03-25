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
<<<<<<< Updated upstream
    question:"Auditor Name",
=======
    question: "Audit Name",
>>>>>>> Stashed changes
    inputType: "text",
    id: "auditorName",
    placeholder: "Enter the auditor name"
  },
  {
    question: "FBO's representative",
    inputType: "text",
    id: "fboRepresentativeName",
    placeholder: "Representative name"
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
  {
    question: "Food establishment has updated FSSAI license and is displayed at a prominent location",
    inputType: "number",
    id: "score1",
    placeholder: 'Enter your Score'
  },
  {
    question: "The design of food premises provides adequate working space; permit maintenance & cleaning to prevent the entry of dirt, dust & pests",
    inputType: "number",
    id: "score2",
    placeholder: 'Enter your Score'
  },
  {
    question: "The internal structure & fittings are made of non-toxic impermeable material.",
    inputType: "number",
    id: "score3",
    placeholder: 'Enter your Score'
  },
  {
    question: "Walls, ceilings & doors are free from flaking paint or plaster, condensation & shedding particles ",
    inputType: "number",
    id: "score4",
    placeholder: 'Enter your Score'
  },
  {
    question: "Floors are non-slippery & slopped appropriately",
    inputType: "number",
    id: "score5",
    placeholder: 'Enter your Score'
  },
  {
    question: "Windows are kept closed & fitted with insect proof screen when opening to an external environment ",
    inputType: "number",
    id: "score6",
    placeholder: 'Enter your Score'
  },
  {
    question: "Doors are close fitted at all ends to avoid entry of pests. ",
    inputType: "number",
    id: "score7",
    placeholder: 'Enter your Score'
  },
  {
    question: "Equipment and containers are made of non-toxic, impervious, non-corrosive material which is easy to clean and disinfect. (Preferably SS316 & SS304 for tanks/tankers)",
    inputType: "number",
    id: "score8",
    placeholder: 'Enter your Score'
  },
  {
    question: "Premise has sufficient lighting ",
    inputType: "number",
    id: "score9",
    placeholder: 'Enter your Score'
  }
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
