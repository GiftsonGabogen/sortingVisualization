import { useState } from "react";

const useSpeed = () => {
  const [speed, setSpeed] = useState(localStorage.getItem("speed") !== null ? localStorage.getItem("speed") : 100);
  const newSpeed = e => {
    setSpeed(e.target.value);
    localStorage.setItem("speed", e.target.value);
  };
  return { speed, setSpeed, newSpeed };
};
export default useSpeed;
