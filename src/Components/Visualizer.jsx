import React, { useState, useEffect } from "react";
import randomInt from "./modules/randomInt";
import Mergesort from "./sorting/Mergesort";
import mergeSort from "./animations/mergeSort";
import Quicksort from "./sorting/Quicksort";
import Selectionsort from "./sorting/Selectionsort";
import quickSort from "./animations/quickSort";
import selectionSort from "./animations/selectionSort";
const Visualizer = () => {
  let barHeight = 80;
  let arrayContainer = [];
  for (let i = 0; i < 70; i++) {
    arrayContainer.push(randomInt(10, barHeight));
  }
  const [array, setArray] = useState(arrayContainer);
  const [speed, setSpeed] = useState(100);
  const [bars, setBars] = useState(120);

  useEffect(() => {
    console.log(speed);
  }, [speed]);
  const newArray = () => {
    arrayContainer = [];
    for (let i = 0; i < Number(bars); i++) {
      arrayContainer.push(randomInt(10, barHeight));
    }
    const valueStickReset = document.getElementsByClassName("values");
    for (let a = 0; a < valueStickReset.length; a++) {
      valueStickReset[a].style.backgroundColor = "#6dd47e";
    }
    setArray([...arrayContainer]);
  };

  const newSpeed = e => {
    setSpeed(e.target.value);
  };

  const newBars = e => {
    arrayContainer = [];
    setBars(Number(e.target.value));
    for (let i = 0; i < Number(e.target.value); i++) {
      arrayContainer.push(randomInt(10, barHeight));
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
                style={{ height: `${arrValue}%` }}
                key={i}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="buttons">
        <p className="newArray sortButton" onClick={() => newArray()}>
          New Array
        </p>
        <p
          className="sortButton"
          onClick={() => quickSort(Quicksort(array), Number(speed))}
        >
          Quick Sort
        </p>
        <p
          className="sortButton"
          onClick={() =>
            mergeSort(Mergesort(array), array, setArray, Number(speed))
          }
        >
          Merge Sort
        </p>
        <p
          className="sortButton"
          onClick={() => selectionSort(Selectionsort(array), Number(speed))}
        >
          Selection Sort
        </p>
        <div className="range">
          <h3>Speed</h3>
          <input
            type="range"
            value={speed}
            className="speed"
            step="20"
            min="20"
            max="200"
            onChange={newSpeed}
          />
        </div>
        <div className="range">
          <h3>Bars</h3>
          <input
            type="range"
            value={bars}
            className="bars"
            step="20"
            min="20"
            max="200"
            onChange={newBars}
          />
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
