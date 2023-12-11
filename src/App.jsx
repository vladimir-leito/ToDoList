import { useState } from 'react';

import useLocalStorage from './hooks/useLocalStorage'

import InputForm from './components/InputForm';
import TaskList from './components/TaskList';

import './App.scss';

function App() {
  const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(task => task.id !== id))
  }

  return (
    <div className="container">
      <header>
        Your ToDo
      </header>
      <InputForm addTask={addTask}/>
      {tasks && (
        <TaskList tasks={tasks} deleteTask={deleteTask}/>
      )}
    </div>
  );
}

export default App;
