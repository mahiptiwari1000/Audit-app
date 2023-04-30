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
import { useLazyQuery } from "@apollo/client";
import queries from "../../graphql/queries";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [getForms, { data: formData, error: formErr, loading: formLoading }] =
    useLazyQuery(queries.GET_ALL_FORMS);

  useEffect(() => {
    getForms();
  }, [getForms]);

  useEffect(() => {
    if (formData) {
      console.log(formData);
    }
    console.log(formErr);
  }, [formData, formLoading, formErr]);

  const onClickNewEntry = () => {
    navigate("/new-entry");
  };

  const handleEntryClick = (id) => {
      navigate(`/admin-dashboard/entry/${id}`)
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
          <div className={styles.entryTitle}>Existing Entries:</div>
          <div className={styles.cardsContainer}>
            {entryData.map((d) => (
              <CardForEntries
                key={d.title}
                title={d.title}
                date={d.date}
                description={d.description}
                keyword={"entry"}
                id={d.id}
                onClick={handleEntryClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
