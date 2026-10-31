import { useState } from "react";

function TaskSection({ tasks, onAddTask }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim() === "") return;
    onAddTask(task.trim());
    setTask("");
  };

  return (
    <section className="task-section" id="tasks">
      <h2>Add Task</h2>

      <div className="task-form">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button className="btn" onClick={handleAdd}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((item, index) => (
          <li className="task-item" key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default TaskSection;
