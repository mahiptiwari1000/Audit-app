import React, { useEffect, useState } from "react";
import { NavbarItems } from "../utils/constants";
import styles from "./styles/navbarStyles.module.css";
import { useNavigate } from "react-router-dom";
import Icons from "../themes/Icons";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useSignOut } from "react-auth-kit";

const NavbarItem = (props) => {
  const { name, path, isActive, onClick = {} } = props;
  return (
    <div
      className={`${styles.itemWrapper} ${isActive ? styles.activeItem : ""}`}
    >
      <div className={styles.itemName} onClick={onClick}>
        {name}
      </div>
    </div>
  );
};

export default function Navbar(props) {
  const { activeItem } = props;
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);
  const signOutUser = useSignOut();

  const onClickNavBarItem = (item) => {
    navigate(item.path);
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const onLogOut = () => {
    signOut(auth)
      .then(() => {
        signOutUser();
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbarLinks}>
        {NavbarItems.map((item) => (
          <NavbarItem
            key={item.name}
            name={item.name}
            path={item.path}
            isActive={activeItem === item.name}
            onClick={() => onClickNavBarItem(item)}
          />
        ))}
        <div className={styles.icon} onClick={() => onLogOut()}>
          <img src={Icons.LOGOUT} alt="Logout icon" />
        </div>
      </div>
    </div>
  );
}
