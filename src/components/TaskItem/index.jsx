import { useState } from 'react';
import styles from './TaskItem.module.scss';

import Minus from '../../assets/icons/minus.jsx';

const TaskItem = ({ task, deleteTask, toggleTask }) => {
  const [checked, setChecked] = useState(task.checked);

  const handleChange = (e) => {
    setChecked(!checked);
    toggleTask(task.id);
  };

  const textDynamicStyle = {
    textDecoration: checked ? 'line-through' : 'none',
  }

  const taskDynamicStyle = {
    opacity: checked ? '0.7' : '1'
  }

  return (
    <li className={styles.task} style={taskDynamicStyle}>
      <div className={styles.task__content__left}>
        <div className={styles.task__content__left__check}>
          <input
            type="checkbox"
            id={task.id}
            className={styles.checkbox}
            checked={checked}
            name={task.name}
            onChange={handleChange}
          />
          <label htmlFor={task.id} className={styles.label}></label>
        </div>
        <div className={styles.text__cont}>
          <label htmlFor={task.id} className={styles.text} style={textDynamicStyle}>
            {task.name}
          </label>
        </div>
      </div>
      <div className={styles.task__content__right}>
        <button
          className={styles.remove__btn}
          onClick={() => deleteTask(task.id)}>
          <Minus width="15px" height="15px" />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
