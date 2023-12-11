import styles from './TaskItem.module.scss';

const TaskItem = ({ task, deleteTask }) => {
  return (
    <li className={styles.task}>
      {task.name}
      <button onClick={() => deleteTask(task.id)}>-</button>
    </li>
  );
};

export default TaskItem;
