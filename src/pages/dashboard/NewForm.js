import React, { useState } from "react";
import styles from "./styles/newEntryStyles.module.css";
import Button from "../../../src/components/Button";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

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

  return (
    <form className="App" autoComplete="off">
      <div className="form-field">
        <label htmlFor="service">Create a Form</label>
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
                <option value="Number">Number</option>
              </select>
              {serviceList.length - 1 === index && (
                <button
                  type="button"
                  onClick={handleServiceAdd}
                  className="add-btn"
                >
                  <span>Enter a prompt</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {serviceList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
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
      <button>Submit</button>
    </form>
  );
}
