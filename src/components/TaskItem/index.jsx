import styles from "./TaskItem.module.scss";

import Minus from '../../assets/icons/minus.jsx'

const TaskItem = ({ task, deleteTask }) => {
  return (
    <li className={styles.task}>
      <div className={styles.task__content__left}>
        <div className="hui">+</div>
        <div className={styles.task__content__left__text}>{task.name}</div>
      </div>
      <div className={styles.task__content__right}>
        <button
          className={styles.remove__btn}
          onClick={() => deleteTask(task.id)}
        >
          <Minus width="15px" height="15px"/>
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
