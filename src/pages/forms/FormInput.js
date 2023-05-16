import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/formInput.module.css";
import Button from "../../components/Button";
import { scoreData } from "../../utils/constants";
import BackButton from "../../components/BackButton";

const PromptComponent = (props) => {
  const {
    setFormValues,
    prompt,
    inputType,
    setCurrentIdx,
    maxIdx,
    idx,
    handleSubmit,
    existingEntry,
    ans,
    additionalComments,
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
      <BackButton />
      <div className={styles.formPrompt}>{prompt}</div>
      <div className={styles.inputContainer}>
        <input
          type={inputType}
          value={ans || inputValue}
          onChange={handleInput}
          className={styles.inputStyle}
          disabled={!existingEntry}
        />
      </div>
      <div className={styles.textAreaContainer}>
        <textarea
          placeholder="Additional comments"
          value={additionalComments || comment}
          onChange={handleCommentInput}
          className={styles.textAreaStyle}
          disabled={!existingEntry}
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

export default function FormInput({ data, existingEntry }) {
  //   const [inputValue, setInputValue] = useState("");
  const [idx, setCurrentIdx] = useState(0);
  const [formValues, setFormValues] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [responseSum, setResponseSum] = useState(0);
  const handleSubmit = () => {
    setShowTable(true);
    console.log(formValues);
    let sum = 0;
    formValues.forEach((d) => {
      sum += parseInt(d.ans);
    });
    setResponseSum(sum);
  };

  return (
    <div className={styles.container}>
      {showTable ? (
        <div>
          <div className={styles.tableStyle}>
            <BackButton />
            <table>
              <tr>
                <th>S.No</th>
                <th>Audit Areas</th>
                <th>Max Score</th>
                <th>Obtained Score</th>
              </tr>
              {formValues.map((d, i) => {
                return (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{scoreData[i].auditAreas}</td>
                    <td>{scoreData[i].maxScore}</td>
                    <td>{d.ans}</td>
                  </tr>
                );
              })}
            </table>
            <p>TOTAL SCORE : {responseSum}</p>
          </div>
        </div>
      ) : (
        <PromptComponent
          setCurrentIdx={setCurrentIdx}
          idx={idx}
          prompt={data[idx].title}
          inputType={data[idx].inputType}
          maxIdx={data.length}
          setFormValues={setFormValues}
          handleSubmit={handleSubmit}
          existingEntry={existingEntry}
          ans={data[idx].ans}
          additionalComments={data[idx].additionalComments}
        />
      )}
    </div>
  );
}
