import React from "react";
import { NavbarItems } from "../utils/constants";
import styles from "./styles/navbarStyles.module.css";

const NavbarItem = (props) => {
  const { name, path, isActive } = props;
  return (
    <div
      className={`${styles.itemWrapper} ${isActive ? styles.activeItem : ""}`}
    >
      <div className={styles.itemName}>{name}</div>
    </div>
  );
};

export default function Navbar(props) {
  const { activeItem } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbarLinks}>
        {NavbarItems.map((item) => (
          <NavbarItem
            name={item.name}
            path={item.path}
            isActive={activeItem === item.name}
          />
        ))}
      </div>
    </div>
  );
}
