import { useState, useEffect } from "react";

const MoveMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const movement = (e) => {
    console.log("MouseMoving");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("UseEffect");
    window.addEventListener("mousemove", movement);

    return () => {
      console.log("Component unmounting");
      window.removeEventListener("mousemove", movement);
    };
  }, []);

  return (
    <div>
      <h3>
        Hooks= X-{x} Y-{y}
      </h3>
    </div>
  );
};

export default MoveMouse;
