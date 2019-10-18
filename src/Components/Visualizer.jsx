import React, { useState, useEffect } from "react";
import randomInt from "./modules/randomInt";
import Mergesort from "./sorting/Mergesort";
import mergeSort from "./animations/mergeSort";
import Quicksort from "./sorting/Quicksort";
import quickSort from "./animations/quickSort";
const Visualizer = () => {
  let arrayContainer = [];
  for (let i = 0; i < 70; i++) {
    arrayContainer.push(randomInt(10, 500));
  }
  const [array, setArray] = useState(arrayContainer);
  const [speed, setSpeed] = useState(100);
  const [bars, setBars] = useState(70);

  useEffect(() => {
    console.log(speed);
  }, [speed]);
  const newArray = () => {
    arrayContainer = [];
    for (let i = 0; i < 70; i++) {
      arrayContainer.push(randomInt(10, 500));
    }
    setArray([...arrayContainer]);
    const valueStickReset = document.getElementsByClassName("values");
    for (let a = 0; a < valueStickReset.length; a++) {
      valueStickReset[a].style.backgroundColor = "green";
    }
  };

  const newSpeed = e => {
    setSpeed(e.target.value);
  };

  const newBars = e => {
    arrayContainer = [];
    setBars(Number(e.target.value));
    for (let i = 0; i < Number(e.target.value); i++) {
      arrayContainer.push(randomInt(10, 500));
    }
    setArray([...arrayContainer]);
  };

  return (
    <div className="Visualizer">
      <div className="Sorting">
        <div className="SortingTable">
          {array.map((arrValue, i) => {
            return (
              <div
                className="values"
                style={{ height: `${arrValue}px` }}
                key={i}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="buttons">
        <button className="newArray" onClick={() => newArray()}>
          new Array
        </button>
        <button
          className="sortButton"
          onClick={() => quickSort(Quicksort(array), Number(speed))}
        >
          Quick Sort
        </button>
        <button
          className="sortButton"
          onClick={() =>
            mergeSort(Mergesort(array), array, setArray, Number(speed))
          }
        >
          Merge Sort
        </button>
        <input
          type="range"
          value={speed}
          className="speed"
          step="20"
          min="20"
          max="200"
          onChange={newSpeed}
        />
        <input
          type="range"
          value={bars}
          className="bars"
          step="10"
          min="20"
          max="120"
          onChange={newBars}
        />
      </div>
    </div>
  );
};

export default Visualizer;
