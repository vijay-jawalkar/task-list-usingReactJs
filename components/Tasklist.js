import "../src/styles.css";
import { useState } from "react";

export function Tasklist() {
  const [tasks, setTask] = useState([
    { id: 2, taskName: "reading", time: "9:00 am", completed: true },
    { id: 4, taskName: "walking", time: "5:00 pm", completed: false },
    { id: 6, taskName: "dinner", time: "9:00 pm", completed: false }
  ]);

  const [show, setShow] = useState(true);

  // this function is used to delete the task
  function handleDelete(id) {
    setTask(tasks.filter((task) => task.id !== id));
  }
  return (
    <>
      <h1> Task List </h1>
      <button className="trigger" onClick={() => setShow(!show)}>
        {" "}
        show / hide{" "}
      </button>

      <ul>
        {show &&
          tasks.map((task) => (
            <li
              key={task.id}
              className={task.completed ? "completed" : "incomplete"}
            >
              {" "}
              <span>
                {" "}
                {task.id} - {task.taskName} - {task.time}{" "}
              </span>
              <button onClick={() => handleDelete(task.id)} className="delete">
                {" "}
                Delete{" "}
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
