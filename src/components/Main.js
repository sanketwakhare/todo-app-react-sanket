import React, { useState } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

let taskList = [
  {
    taskText: "Read a book",
    isCompleted: false,
  },
  {
    taskText: "Go for walk",
    isCompleted: false,
  },
];

export default function Main() {
  const [tasks, setTasks] = useState(taskList);

  // add new task
  const addTask = (newTaskText) => {
    if (newTaskText.trim() === "") {
      alert("Task can not be empty");
      return;
    }
    taskList = [...tasks];
    taskList.push({ taskText: newTaskText, isCompleted: false });
    setTasks(taskList);
  };

  // delete task
  const handleDeleteTask = (taskIndex) => {
    taskList = [...tasks];
    taskList.splice(taskIndex, 1);
    setTasks(taskList);
  };

  // save/update task
  const handleSaveTask = (taskIndex, newTaskText) => {
    if (newTaskText.trim() === "") {
      alert("Task can not be empty");
      return;
    }
    taskList = [...tasks];
    let taskToUpdate = taskList[taskIndex];
    taskToUpdate.taskText = newTaskText;
    setTasks(taskList);
  };

  const handleToggleTaskState = (taskIndex, isCompleteState) => {
    taskList = [...tasks];
    let taskToUpdate = taskList[taskIndex];
    taskToUpdate.isCompleted = isCompleteState;
    setTasks(taskList);
  };

  return (
    <div className="d-flex p-2 flex-column justify-content-center align-items-center align-self-center flex-fill flex-wrap">
      <header className="header">
        <h1>TODO App</h1>
      </header>
      <article>
        <CreateTask addTask={addTask} />
        <TaskList
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          handleSaveTask={handleSaveTask}
          handleToggleTaskState={handleToggleTaskState}
        />
      </article>
      <footer className="footer"></footer>
    </div>
  );
}
