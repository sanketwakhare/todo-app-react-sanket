import React, { useState } from "react";

export default function CreateTask(props) {
  const [taskText, setTaskText] = useState("");

  // set taskText state on input change event
  const handleChangeTaskText = (event) => {
    const taskText = event.target.value;
    setTaskText(taskText);
  };

  // add new task
  const handleAddTask = (event) => {
    event.preventDefault();
    props.addTask(taskText);
    setTaskText("");
  };

  return (
    <div className="p-2 bd-highlight">
      <form onSubmit={handleAddTask} className="form-inline">
        <label className="sr-only" htmlFor="taskTextInput"></label>
        <input
          id="taskTextInput"
          type="text"
          name="taskText"
          placeholder="Add Task"
          value={taskText}
          onChange={handleChangeTaskText}
          autoFocus
          className="form-control mb-2 mr-sm-2"
          autoComplete="off"
        ></input>
        <button type="submit" className="btn btn-success btn-sm mb-2 mr-sm-2">
          <span className="bi bi-plus-circle"> Add</span>
        </button>
      </form>
    </div>
  );
}
