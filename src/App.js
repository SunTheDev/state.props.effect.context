import "./styles.css";
import { useState } from "react";
import MoveMouse from "./components/MoveMouse";
// import Counter from "./components/Counter";
import Info from "./components/Info";

export default function App() {
  const ArrOne = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    }
  ];

  const [data, setData] = useState(ArrOne);
  const [newId, setNewId] = useState("");
  const [tog, setTog] = useState(false);

  const addID = () => {
    setData([
      ...data,
      {
        id: newId
      }
    ]);
    setNewId("");
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {data.map((info) => (
        <h3 key={info.id}>{info.id}</h3>
      ))}
      <input onChange={(e) => setNewId(e.target.value)} value={newId} />
      <button onClick={addID}>Add Stuff</button>
      {tog && <MoveMouse />}
      <button onClick={() => setTog(!tog)}>Toggle</button>
      {/* <Counter /> */}
      <Info />
    </div>
  );
}
