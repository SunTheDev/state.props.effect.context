import { useState, useEffect } from "react";
import axios from "axios";

const Info = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/`)
      .then((res) => setData(res.data));
  }, []);

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {filteredData.map((stuff) => (
        <li key={stuff.id}>{stuff.name}</li>
      ))}
    </div>
  );
};

export default Info;
