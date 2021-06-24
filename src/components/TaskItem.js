import React, { useState } from "react";

function TaskItem(props) {
  const [taskText, setTaskText] = useState(props.task.taskText);
  const [isEditing, setIsEditing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // delete task
  const handleDeleteTask = () => {
    props.handleDeleteTask(props.id);
  };

  //edit task
  const handleEditTask = () => {
    setIsEditing(true);
    setTaskText(props.task.taskText);
  };

  // cancel task editing
  const handleCancelTask = () => {
    setIsEditing(false);
    // set original value of task text if cancelled
    setTaskText(props.task.taskText);
  };

  // Save Task
  const handleSaveTask = () => {
    setIsEditing(false);
    props.handleSaveTask(props.id, taskText);
  };

  // set taskText state on change input event
  const handleChangeTaskText = (event) => {
    const taskText = event.target.value;
    setTaskText(taskText);
  };

  const handleToggleTaskState = (event) => {
    const isCompleteState = event.target.checked;
    if (isCompleteState !== undefined) {
      setIsCompleted(isCompleteState);
      props.handleToggleTaskState(props.id, isCompleteState);
    }
  };

  return (
    <React.Fragment>
      {isEditing ? (
        <tr>
          <th scope="row">{props.id + 1}</th>
          <td className="mb-2 mr-sm-2">
            <form onSubmit={handleSaveTask}>
              <label className="sr-only" htmlFor="taskTextEditInput"></label>
              <input
                id="taskTextEditInput"
                type="text"
                name="taskText"
                value={taskText}
                onChange={handleChangeTaskText}
                autoFocus
                className="form-control mb-2 mr-sm-2"
                autoComplete="off"
              ></input>
            </form>
          </td>
          <td>
            <button
              className="btn btn-success btn-sm mb-2 mr-sm-2"
              onClick={handleSaveTask}
            >
              <span className="bi bi-check2"> Save</span>
            </button>
            <button
              className="btn btn-secondary btn-sm mb-2 mr-sm-2"
              onClick={handleCancelTask}
            >
              <span className="bi bi-x"> Cancel</span>
            </button>
          </td>
        </tr>
      ) : (
        <tr>
          <th scope="row">{props.id + 1}</th>
          <td
            className="mb-2 mr-sm-2 text-left"
            onClick={handleToggleTaskState}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={isCompleted}
                id={"isCompleteStatusCheck_" + props.id}
              ></input>
              <label
                className="form-check-label "
                htmlFor={"isCompleteStatusCheck_" + props.id}
              >
                <span className={isCompleted ? "strikethrough" : ""}>
                  {props.task.taskText}
                </span>
              </label>
            </div>
          </td>
          <td>
            <button
              className="btn btn-info btn-sm mb-2 mr-sm-2"
              onClick={handleEditTask}
            >
              <span className="bi bi-pencil-square"> Edit</span>
            </button>
            <button
              className="btn btn-danger btn-sm mb-2 mr-sm-2"
              onClick={handleDeleteTask}
            >
              <span className="bi bi-trash"> Delete</span>
            </button>
          </td>
        </tr>
      )}
    </React.Fragment>
  );
}

export default TaskItem;
