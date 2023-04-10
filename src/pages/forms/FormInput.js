import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/formInput.module.css";

const PromptComponent = (props) => {
  const { prompt, inputType } = props;
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    const { value: input } = e;
    setInputValue(input);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formPrompt}>{prompt}</div>
      <div className={styles.inputContainer}>
        <input
          type={inputType}
          value={inputValue}
          onChange={handleInput}
          className={styles.inputStyle}
        />
      </div>
    </div>
  );
};

export default function FormInput() {
  //   const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef(null);

  return (
    <div className={styles.container}>
      <PromptComponent prompt={"What's ur name?"} inputType={"text"} />
      <PromptComponent prompt={"What's ur age?"} inputType={"number"} />
    </div>
  );
}
