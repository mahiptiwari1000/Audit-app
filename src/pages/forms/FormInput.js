import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/formInput.module.css";
import Button from "../../components/Button";

const PromptComponent = (props) => {
  const { prompt, inputType, setCurrentIdx, maxIdx, idx } = props;
  const [inputValue, setInputValue] = useState("");
  const [comment, setComment] = useState("");
  const handleInput = (e) => {
    const { value: input } = e;
    setInputValue(input);
  };

  const handleCommentInput = (e) => {
    const { value: commentInput } = e.target;
    setComment(commentInput);
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
      <div className={styles.textAreaContainer}>
        <textarea
          placeholder="Additional comments"
          value={comment}
          onChange={handleCommentInput}
          className={styles.textAreaStyle}
        />
      </div>
      <div className={styles.nextButton}>
        <div
          className={styles.nextButtonText}
          onClick={() =>
            setCurrentIdx((prev) => Math.min(prev + 1, maxIdx - 1))
          }
        >
          {idx === maxIdx - 1 ? "Submit" : "Next"}
        </div>
      </div>
    </div>
  );
};

export default function FormInput({ data }) {
  //   const [inputValue, setInputValue] = useState("");
  const [idx, setCurrentIdx] = useState(0);

  return (
    <div className={styles.container}>
      <PromptComponent
        setCurrentIdx={setCurrentIdx}
        idx={idx}
        prompt={data[idx].title}
        inputType={data[idx].inputType}
        maxIdx={data.length}
      />
    </div>
  );
}
