import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import "./App.css";
import Header from "./Header";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

function App() {
  const LOCAL_STORAGE_KEY = "tasks";
  const [tasks, setTasks] = useState([]);

  const addTaskHandler = (task) => {
    console.log(task);
    setTasks([...tasks, { id: uuid(), ...task }]);
  };

  const removeTaskHandler = (id) => {
    const newTaskList = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(newTaskList);
  }
  const doneTaskHandler = (id) => {
    // console.log("Success")
    // console.log(id)
    // const t = tasks.filter((task) => {
    //   return task.id === id;
    // });
    // console.log('test')
  
    //   const newTaskList = tasks.filter((task) => {
    //     return task.id !== id;
    //   });

    // console.log(newTaskList)
  };

  useEffect(() => {
    const retriveTasks= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveTasks) setTasks(retriveTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="ui container">
      <Header />
      <AddTask addTaskHandler={addTaskHandler} />
      <TaskList tasks={tasks} getTaskId={removeTaskHandler} getDoneId={doneTaskHandler}/>
    </div>
  );
}

export default App;
