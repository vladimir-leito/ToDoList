import './InputForm.scss';
import { useState } from 'react';

const InputForm = ({addTask}) => {
  const [task, setTask] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      id: Date.now()
    })
    setTask('');
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
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <div className="cut"></div>
          <label htmlFor="Enter task" className="placeholder">
            Enter task
          </label>
          <button className="submit" type="submit">
            +
          </button>
        </div>
      </form>
    </>
  );
};

export default InputForm;
