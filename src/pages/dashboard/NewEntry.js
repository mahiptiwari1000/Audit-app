import React, { useState } from "react";
import styles from "./styles/newEntryStyles.module.css";
import Button from "../../../src/components/Button";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { gradingData } from "../../utils/constants";
import { scoreData } from "../../utils/constants";
import { newEntryFormData } from "../../utils/constants";
import FormInput from "../forms/FormInput";

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
      <FormInput data={newEntryFormData} />
    </>
  );
};

export default NewEntry;
