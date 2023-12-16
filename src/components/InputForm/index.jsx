import { useState } from 'react';

import Plus from '../../assets/icons/plus.jsx';
import styles from './InputForm.module.scss';

const InputForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      filter: 'all',
      id: Date.now(),
    });
    setTask('');
  };

  return (
    <>
      <form className={styles.todo} onSubmit={handleFormSubmit}>
        <div className={styles.wrapper}>
          <input
            className={styles.input}
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
          <div className={styles.cut}></div>
          <label htmlFor="Enter task" className={styles.placeholder}>
            Enter task
          </label>
          <button className={styles.submit} type="submit">
            <Plus width="1.2rem" height="1.2rem" />
          </button>
        </div>
      </form>
    </>
  );
};

export default InputForm;
