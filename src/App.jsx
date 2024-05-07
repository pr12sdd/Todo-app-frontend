import { useEffect, useState } from "react";
import Heading from "./components/heading";
import Input from "./components/input";
import RecordList from "./components/recordList";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  // const [decision, setDecision] = useState(false);
  useEffect(() => {
    axios
      .get("https://todo-app-backend-gpip.onrender.com/todos")
      .then((element) => {
        const value = element.data;
        setData([...data, ...value]);
        //console.log(element.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <center>
      <Heading />
      <Input data={data} setData={setData} />
      {data.length ? (
        <RecordList data={data} setData={setData} />
      ) : (
        <h1>Empty List!!!!</h1>
      )}
    </center>
  );
}

export default App;
