import React, { useState, useEffect } from "react";
import randomInt from "./modules/randomInt";
import Mergesort from "./sorting/Mergesort";
import Quicksort from "./sorting/Quicksort";
const Visualizer = () => {
  let arrayContainer = [];
  for (let i = 0; i < 15; i++) {
    arrayContainer.push(randomInt(10, 500));
  }
  const [array, setArray] = useState([
    400,
    800,
    850,
    900,
    500,
    200,
    100,
    600,
    550
  ]);
  const sort = sortedArray => {
    const { animations } = sortedArray;
    console.log(animations);
    for (let a = 0; a < animations.length; a++) {
      const { compare, swap } = animations[a];
      setTimeout(() => {
        const valueStick = document.getElementsByClassName("values");
        //if an element is comparing, turn it's color to green
        valueStick[compare[1]].style.backgroundColor = "red";
        valueStick[compare[0]].style.backgroundColor = "red";
        //for resetting color of previous loops to green
        if (a > 0) {
          valueStick[animations[a - 1].compare[0]].style.backgroundColor =
            "green";
          if (animations[a - 1].swap !== undefined || null) {
            valueStick[animations[a - 1].swap[0]].style.backgroundColor =
              "green";
            valueStick[animations[a - 1].swap[1]].style.backgroundColor =
              "green";
          }
          //if the first iteration on quicksort is done the pivot property is change so the previous pivot color will be turn back into green
          if (animations[a - 1].end === true) {
            valueStick[animations[a - 1].compare[1]].style.backgroundColor =
              "green";
          }
        }
        //if we're swapping the color will turn blue
        if (swap !== undefined || null) {
          valueStick[swap[1]].style.backgroundColor = "blue";
          valueStick[swap[0]].style.backgroundColor = "blue";
        }
        //if the whole quicksort is finished turn all the color of the bars purple
        if (a === animations.length - 1) {
          for (let b = 0; b < valueStick.length; b++) {
            setTimeout(() => {
              valueStick[b].style.backgroundColor = "purple";
            }, b * 100);
          }

          /* valueStick[compare[1]].style.backgroundColor = "green";
          valueStick[compare[0]].style.backgroundColor = "green";
          valueStick[swap[1]].style.backgroundColor = "green";
          valueStick[swap[0]].style.backgroundColor = "green"; */
        }
      }, a * 1000);
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
      <button className="sortButton" onClick={() => sort(Quicksort(array))}>
        Quick Sort
      </button>
    </div>
  );
};

export default Visualizer;
