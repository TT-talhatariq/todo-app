import React from "react";

import styles from "./Item.module.css";

const Item = ({ tasks, deleteTask }) => {
  return (
    <div className={styles.items}>
      {tasks.length > 0 && <h5>All Tasks</h5>}
      <ul>
        {tasks.map((task) => (
          <li>
            <span>{task.title}</span>
            <i
              class="fa-solid fa-trash"
              onClick={() => {
                deleteTask(task.id);
              }}
              style={{ color: "red" }}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
