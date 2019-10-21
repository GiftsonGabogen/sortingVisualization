import { useState } from "react";

const useBars = () => {
  const [bars, setBars] = useState(localStorage.getItem("bars") !== null ? localStorage.getItem("bars") : 120);

  return { bars, setBars };
};
export default useBars;
