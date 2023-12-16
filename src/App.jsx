import { useState } from 'react';

import useLocalStorage from './hooks/useLocalStorage';

import InputForm from './components/InputForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';

import styles from './App.module.scss';

function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  const [filter, setFilter] = useState('all');

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const filterTasks = (tasks, filter) => {
    switch (filter) {
      case 'completed':
        return tasks.filter((item) => item.checked);
      case 'uncompleted':
        return tasks.filter((item) => !item.checked);
      default:
        return tasks;
    }
  };

  const onFilterSelect = (filter) => {
    setFilter(filter);
  };

  return (
    <div className={styles.container}>
      <header>
        ToDo <span>It!</span>
      </header>
      <InputForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={filterTasks(tasks, filter)}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      )}
      <FilterBar filter={filter} onFilterSelect={onFilterSelect} />
    </div>
  );
}

export default App;
