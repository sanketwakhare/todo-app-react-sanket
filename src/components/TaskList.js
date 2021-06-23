import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList(props) {
  return (
    <div className="p-2 bd-highlight">
      <table className="table table-striped table-sm table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Tasks</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.tasks.map((tempTask, index) => {
            return (
              <TaskItem
                key={index}
                id={index}
                task={tempTask}
                handleDeleteTask={props.handleDeleteTask}
                handleSaveTask={props.handleSaveTask}
                handleToggleTaskState={props.handleToggleTaskState}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
