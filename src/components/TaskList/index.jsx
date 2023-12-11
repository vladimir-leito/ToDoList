import TaskItem from '../TaskItem';
import styles from './TaskList.module.scss'

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul className={styles.tasks}>
      {tasks.map((item) => (
        <TaskItem key={item.id} task={item} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;
