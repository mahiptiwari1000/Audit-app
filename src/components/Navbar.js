import React from "react";
import { NavbarItems } from "../utils/constants";
import styles from "./styles/navbarStyles.module.css";
import { useNavigate } from "react-router-dom";

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

  const onClickNavBarItem = (item) => {
    console.log("jndjnj", item);
    navigate(item.path);
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
      </div>
    </div>
  );
}
