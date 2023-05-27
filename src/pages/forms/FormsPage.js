import React from "react";
import styles from "./styles/forms.module.css";
import Icons from "../../themes/Icons";
import CardForEntries from "../../components/Card";
import { createdFormsData } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";

function Forms(props) {
  const navigate = useNavigate();

  const onClickCreateForm = () => {
    navigate("/new-form");
  };

  const handleFormListItemClick = (id) => {
    navigate(`/admin-dashboard/form/${id}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.dashboardWrapper}>
        <div className={styles.headerSection}>
          <div className={styles.titleSection}>
            <div className={styles.title}>Dashboard</div>
            <div className={styles.icon}>
              <img src={Icons.SEARCH} alt="Search icon" />
            </div>
          </div>
          <div className={styles.subHeaderSection}>
            <div style={{"margin-bottom":"16px"}}>
              <BackButton />
            </div>
            {/* <div className={styles.newEntry}>
              <div
                className={styles.newEntryText}
                onClick={() => onClickCreateForm()}
              >
                Create Form
              </div>
            </div> */}
            <div style={{"margin-left":"16px","margin-bottom":"16px"}}>
              <Button title={"Create Form"} onClick={onClickCreateForm} />
            </div>
          </div>
        </div>
        <div className={styles.bodySection}>
          <p>Existing Forms:</p>
          {createdFormsData.length
            ? createdFormsData.map((d) => (
                <CardForEntries
                  key={d.title}
                  title={d.title}
                  date={d.date}
                  description={d.description}
                  keyword={"forms"}
                  id={d.id}
                  onClick={handleFormListItemClick}
                />
              ))
            : "No Forms Yet!!!"}
        </div>
      </div>
    </div>
  );
}

export default Forms;
