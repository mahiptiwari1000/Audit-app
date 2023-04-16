import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/formInput.module.css";
import Button from "../../components/Button";

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

export default function FormInput({ data }) {
  //   const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef(null);

  return (
    <div className={styles.container}>
      {data &&
        data.map((d) => (
          <PromptComponent prompt={d.title} inputType={d.inputType} />
        ))}
                <Button title={"Submit"} />
    </div>
  );
}
