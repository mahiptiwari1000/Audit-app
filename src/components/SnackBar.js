import React, { PureComponent } from "react";
import styles from "./styles/snackbarStyles.module.css";

export class Snackbar extends PureComponent {
  render() {
    const { isActive, message } = this.props;
    return (
      <div
        className={
          isActive
            ? [styles.snackbar, styles.fadeIn].join(" ")
            : [styles.snackbar, styles.fadeOut].join(" ")
        }
      >
        {message}
      </div>
    );
  }
}
