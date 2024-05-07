import { MdDeleteOutline } from "react-icons/md";

import styles from "./record.module.css";
import axios from "axios";
import { useState } from "react";
function Record({ value, data, setData }) {
  const [decision, setDecision] = useState(value.done);
  function fun1() {
    axios
      .delete(
        `https://todo-app-backend-gpip.onrender.com/todos/delete/${value._id}`
      )
      .then((res) => {
        console.log(res);
        const temp = data.filter((element) => element._id !== value._id);
        setData([...temp]);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function fun2() {
    if (value.done === true) {
      value.done = false;
    } else {
      value.done = true;
    }
    axios
      .patch(`http://localhost:8080/todos/update/${value._id}`, {
        done: value.done,
      })
      .then((res) => {
        setDecision(res.data.done);
        console.log(res);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className={styles.p}>
      <div className={styles.q}>
        <input
          type="checkbox"
          defaultChecked={value.done}
          onClick={fun2}
        ></input>

        {value.done === true ? (
          <p className={styles.r}>
            <s>{value.todo}</s>
          </p>
        ) : (
          <p className={styles.r}>{value.todo}</p>
        )}
      </div>
      <div className={styles.r}>
        <MdDeleteOutline size={25} style={{ color: "white" }} onClick={fun1} />
      </div>
    </div>
  );
}
export default Record;
