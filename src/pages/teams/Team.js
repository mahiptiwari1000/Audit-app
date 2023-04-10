import React, { useEffect, useState } from "react";
import styles from "./styles/team.module.css";
import Icons from "../../themes/Icons";
import Modal from "../../components/Modal";
import { useSnackbar } from "../../components/useSnackBar";
import { Snackbar } from "../../components/SnackBar";
import firebase from "firebase/app";
import "firebase/database";

function Team(props) {
  const [isOpenAddUserModal, setIsOpenAddUserModal] = useState(false);
  const { isActive, message, openSnackBar } = useSnackbar();
  const [users, setUsers] = useState([]);

  const _showSnackbarHandler = () => {
    openSnackBar("New User Created!");
  };

  const onClickAddNewUser = () => {
    setIsOpenAddUserModal(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.dashboardWrapper}>
        {isOpenAddUserModal && (
          <Modal
            setIsOpen={setIsOpenAddUserModal}
            isOpenSnackBar={_showSnackbarHandler}
            setListOfUsers={setUsers}
          />
        )}
        <Snackbar isActive={isActive} message={message} />
        <div className={styles.headerSection}>
          <div className={styles.titleSection}>
            <div className={styles.title}>Dashboard</div>
            <div className={styles.icon}>
              <img src={Icons.SEARCH} alt="Search icon" />
            </div>
          </div>
          <div className={styles.subHeaderSection}>
            <div className={styles.newEntry}>
              <div className={styles.newEntryText} onClick={onClickAddNewUser}>
                Add User
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bodySection}>
          {users.length ? users.map((d) => d.email) : "No Users Added Yet!!!"}
        </div>
      </div>
    </div>
  );
}

export default Team;
