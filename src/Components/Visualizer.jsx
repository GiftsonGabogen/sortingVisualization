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
          onClick={() => quickSort(Quicksort(array))}
        >
          Quick Sort
        </button>
        <button
          className="sortButton"
          onClick={() => mergeSort(Mergesort(array))}
        >
          Merge Sort
        </button>
      </div>
    </div>
  );
};

export default Visualizer;
