import { useState } from "react";
import randomInt from "../modules/randomInt";

const useArray = Arguments => {
  let arrayContainer = [];
  const { bars, barHeight, props } = Arguments;
  for (let i = 0; i < bars; i++) {
    arrayContainer.push(randomInt(10, barHeight));
  }
  const [array, setArray] = useState(arrayContainer);

  const newArray = () => {
    if (global.Timeouts !== undefined || null || 0) {
      for (let stop = 0; stop < global.Timeouts.length; stop++) {
        clearTimeout(global.Timeouts[stop]);
      }
    }
    global.Timeouts = [];
    props.history.push(`Reload/-Visualizer`);
  };

  return { array, setArray, newArray };
};
export default useArray;
