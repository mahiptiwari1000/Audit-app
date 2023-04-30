import React, { useState } from "react";
import Button from "../../../src/components/Button";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styles from "./styles/newFormStyles.module.css";

export default function NewForm() {
  const [serviceList, setServiceList] = useState([
    { service: "", inputType: "Character" },
  ]);

  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleInputTypeChange = (e, index) => {
    console.log(e);
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };

  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "", inputType: "Character" }]);
  };

  const onClickSubmit = () => {};

  return (
    <div className={styles.wrapper}>
      <form className="App" autoComplete="off">
        <div className="form-field">
          <div className={styles.title}>Create a Form</div>
          {serviceList.map((singleService, index) => (
            <div key={index} className="services">
              <div className="first-division">
                <input
                  name="service"
                  type="text"
                  id="service"
                  value={singleService.service}
                  onChange={(e) => handleServiceChange(e, index)}
                  placeholder="Enter a question"
                  required
                />

                <select
                  id="inputType"
                  name="inputType"
                  onChange={(e) => handleInputTypeChange(e, index)}
                >
                  <option value="Character">Character</option>
                  <option value="Text">Text</option>
                </select>
                {serviceList.length - 1 === index && (
                  <div className={styles.btnStyle}>
                    <Button
                      title={"Add a New Question"}
                      onClick={(e) => handleServiceAdd(e)}
                    />
                  </div>
                )}
              </div>
              <div className={styles.btnStyle}>
                {serviceList.length !== 1 && (
                  <Button
                    title={"Remove"}
                    onClick={(e) => handleServiceRemove(e)}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="output">
        <h2>Output</h2>
        {serviceList &&
          serviceList.map((singleService, index) => (
            <ul key={index}>
              {singleService.service && singleService.inputType && (
                <li>{singleService.service + ":" + singleService.inputType}</li>
              )}
            </ul>
          ))}
      </div> */}
        <Button title={"Submit"} onClick={(e) => onClickSubmit(e)} />
      </form>
    </div>
  );
}
