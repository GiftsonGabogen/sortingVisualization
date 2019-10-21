import React, { useState, useEffect } from "react";
import randomInt from "./modules/randomInt";
import Mergesort from "./sorting/Mergesort";
import mergeSort from "./animations/mergeSort";
import Quicksort from "./sorting/Quicksort";
import Selectionsort from "./sorting/Selectionsort";
import Bubblesort from "./sorting/Bubblesort";
import quickSort from "./animations/quickSort";
import selectionSort from "./animations/selectionSort";
import bubbleSort from "./animations/bubbleSort";
const Visualizer = props => {
  let barHeight = 80;
  let arrayContainer = [];

  const [speed, setSpeed] = useState(
    localStorage.getItem("speed") !== null ? localStorage.getItem("speed") : 50
  );
  const [bars, setBars] = useState(
    localStorage.getItem("bars") !== null ? localStorage.getItem("bars") : 120
  );
  for (let i = 0; i < bars; i++) {
    arrayContainer.push(randomInt(10, barHeight));
  }
  const [array, setArray] = useState(arrayContainer);

  useEffect(() => {});
  const newArray = () => {
    if (global.Timeouts !== undefined || null || 0) {
      for (let stop = 0; stop < global.Timeouts.length; stop++) {
        clearTimeout(global.Timeouts[stop]);
      }
    }
    global.Timeouts = [];
    props.history.push(`Reload/-Visualizer`);
  };

  const newSpeed = e => {
    setSpeed(e.target.value);
    localStorage.setItem("speed", e.target.value);
  };

  const newBars = e => {
    arrayContainer = [];
    setBars(Number(e.target.value));
    for (let i = 0; i < Number(e.target.value); i++) {
      arrayContainer.push(randomInt(10, barHeight));
    }
    setArray([...arrayContainer]);
    localStorage.setItem("bars", e.target.value);
  };

  const stopAnimation = () => {
    for (let stop = 0; stop < global.Timeouts.length; stop++) {
      clearTimeout(global.Timeouts[stop]);
    }
    const valueStickReset = document.getElementsByClassName("values");
    for (let a = 0; a < valueStickReset.length; a++) {
      valueStickReset[a].style.backgroundColor = "#6dd47e";
    }
    global.Timeouts = [];
  };

  return (
    <div className="Visualizer">
      <div className="Legends">
        <div className="legend">
          <div className="color compareLegend"></div>
          <p>Comparing</p>
        </div>
        <div className="legend">
          <div className="color swapLegend"></div>
          <p>Swapping</p>
        </div>
        <div className="legend">
          <div className="color finishLegend"></div>
          <p>Finish</p>
        </div>
      </div>
      <div className="Sorting">
        <div className="SortingTable">
          {array.map((arrValue, i) => {
            return (
              <div
                className="values"
                style={{ height: `${arrValue}%`, width: `${50 / bars}rem` }}
                key={i}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="buttons">
        <p className="newArray sortButton" onClick={() => newArray()}>
          New Bars
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
        <p
          className="sortButton"
          onClick={() => bubbleSort(Bubblesort(array), Number(speed))}
        >
          Bubble Sort
        </p>
        <p className="sortButton" onClick={() => stopAnimation()}>
          Stop
        </p>

        <div className="range">
          <h3>Speed</h3>
          <input
            type="range"
            value={speed}
            className="speed"
            step="1"
            min="1"
            max="250"
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
            max="240"
            onChange={newBars}
          />
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
