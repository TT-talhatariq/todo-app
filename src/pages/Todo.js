import React, { useState } from "react";

import styles from "./Todo.module.css";
import Item from "../components/Item";

const Todo = () => {
  let data = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(data);
  const [inpuTxt, setInputTxt] = useState("");

  const handleClearAll = () => {
    setTasks([]);
    localStorage.setItem("tasks", JSON.stringify([]));
  };

  const handleAddTask = (e) => {
    e.preventDefault();

    let task = {
      id: new Date(),
      title: inpuTxt,
    };

    const newList = [...tasks, task];

    setTasks(newList);
    setInputTxt("");

    localStorage.setItem("tasks", JSON.stringify(newList));
  };

  const handleDelete = (id) => {
    const filterTasks = tasks.filter((task) => task.id !== id);

    setTasks(filterTasks);
    localStorage.setItem("tasks", JSON.stringify(filterTasks));
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.box}>
        <h1>List down your To-Do Items</h1>
        <div>
          <p>Add your Items here ✏️</p>
          <form className={styles.form} onSubmit={handleAddTask}>
            <input
              type="text"
              placeholder="Your Item"
              value={inpuTxt}
              onChange={(e) => setInputTxt(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </div>
        {/* All Tasks */}
        <Item tasks={tasks} deleteTask={handleDelete} />

        {/* Clear All Buttons */}

        {tasks.length > 0 && (
          <button className={styles.clearAll} onClick={handleClearAll}>
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
