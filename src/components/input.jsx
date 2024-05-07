import styles from "./input.module.css";
import { useRef } from "react";
import axios from "axios";

function Input({ data, setData }) {
  const text = useRef();
  // function fun() {
  //   setData([...data, text.current.value]);
  //   text.current.value = "";
  // }
  function handleAdd() {
    axios
      .post("https://todo-app-backend-gpip.onrender.com/todos/add", {
        todo: text.current.value,
        done: false,
      })
      .then((res) => {
        setData([...data, res.data]);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    text.current.value = "";
  }
  return (
    <>
      <input
        type="text"
        placeholder="Enter Task"
        className={styles.p}
        ref={text}
        onKeyDown={(e) => (e.code === "Enter" ? handleAdd() : "")}
      ></input>
      <button type="button" className={`btn btn-dark`} onClick={handleAdd}>
        Add
      </button>
    </>
  );
}
export default Input;
