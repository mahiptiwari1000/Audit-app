import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/formInput.module.css";
import Button from "../../components/Button";

const PromptComponent = (props) => {
  const {
    setFormValues,
    prompt,
    inputType,
    setCurrentIdx,
    maxIdx,
    idx,
    handleSubmit,
  } = props;
  const [inputValue, setInputValue] = useState("");
  const [comment, setComment] = useState("");
  const handleInput = (e) => {
    const { value: input } = e.target;
    setInputValue(input);
    if (idx === 0) setFormValues((prev) => [{ ...prev[0], ans: input }]);
    else
      setFormValues((prev) => {
        const newVal = [...prev, { ans: input }];
        return newVal;
      });
  };

  const handleCommentInput = (e) => {
    const { value: commentInput } = e.target;
    setComment(commentInput);
    // if (idx === 0)
    //   setFormValues((prev) => [{ ...prev[0], comment: commentInput }]);
    // else
    //   setFormValues((prev) => {
    //     const newVal = [];
    //     prev.forEach((val, index) => {
    //       if (index === idx) {
    //         newVal.push({ ...val, comment: commentInput });
    //       } else {
    //         newVal.push(val);
    //       }
    //       return newVal;
    //     });
    //   });
  };

  useEffect(() => {
    console.log({ idx, maxIdx });
  }, [idx, maxIdx]);

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
        {idx === maxIdx - 1 ? (
          <div className={styles.nextButtonText} onClick={handleSubmit}>
            Submit
          </div>
        ) : (
          <div
            className={styles.nextButtonText}
            onClick={() => {
              setCurrentIdx((prev) => Math.min(prev + 1, maxIdx - 1));
              setInputValue("");
              setComment("");
            }}
          >
            Next
          </div>
        )}
      </div>
    </div>
  );
};

export default function FormInput({ data }) {
  //   const [inputValue, setInputValue] = useState("");
  const [idx, setCurrentIdx] = useState(0);
  const [formValues, setFormValues] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const handleSubmit = () => {
    setShowTable(true);
    console.log(formValues);
  };

  return (
    <div className={styles.container}>
      {showTable ? (
        <div>Submitted</div>
      ) : (
        <PromptComponent
          setCurrentIdx={setCurrentIdx}
          idx={idx}
          prompt={data[idx].title}
          inputType={data[idx].inputType}
          maxIdx={data.length}
          setFormValues={setFormValues}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
