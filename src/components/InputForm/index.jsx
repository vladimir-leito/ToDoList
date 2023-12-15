import { useState } from "react";

import Plus from "../../assets/icons/plus.jsx";
import "./InputForm.scss";

const InputForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };

  return (
    <>
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            className="input"
            type="text"
            placeholder=""
            value={task}
            required
            maxLength={80}
            autoFocus
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <div className="cut"></div>
          <label htmlFor="Enter task" className="placeholder">
            Enter task
          </label>
          <button className="submit" type="submit">
            <Plus width="1.2rem" height="1.2rem" />
          </button>
        </div>
      </form>
    </>
  );
};

export default InputForm;
