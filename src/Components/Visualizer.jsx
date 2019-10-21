import React from "react";
import randomInt from "./modules/randomInt";
import Mergesort from "./sorting/Mergesort";
import mergeSort from "./animations/mergeSort";
import Quicksort from "./sorting/Quicksort";
import Selectionsort from "./sorting/Selectionsort";
import Bubblesort from "./sorting/Bubblesort";
import quickSort from "./animations/quickSort";
import selectionSort from "./animations/selectionSort";
import bubbleSort from "./animations/bubbleSort";
import useSpeed from "./customhooks/Speed";
import useBars from "./customhooks/Bars";
import useArray from "./customhooks/Array";
import useSorting from "./customhooks/Sorting";
const Visualizer = props => {
  let barHeight = 80;
  let arrayContainer = [];

  const SpeedHook = useSpeed();
  const { speed, newSpeed } = SpeedHook;
  const SortingHook = useSorting();
  const { sorting, sortingValueChange } = SortingHook;
  const BarsHook = useBars();
  const { bars, setBars } = BarsHook;
  const ArrayHook = useArray({ arrayContainer, randomInt, bars, barHeight, props });
  const { array, setArray, newArray } = ArrayHook;

  const newBars = e => {
    let arrayContainer = [];
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

  const startSort = () => {
    switch (sorting) {
      case "MergeSort":
        mergeSort({ animations: Mergesort(array), stateArray: array, setArray: setArray, speed: speed });
        break;
      case "SelectionSort":
        selectionSort(Selectionsort(array), speed);
        break;
      case "BubbleSort":
        bubbleSort(Bubblesort(array), speed);
        break;
      case "QuickSort":
        quickSort(Quicksort(array), speed);
        break;
      default:
        break;
    }
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
            return <div className="values" style={{ height: `${arrValue}%`, width: `${40 / bars}rem` }} key={i}></div>;
          })}
        </div>
      </div>
      <div className="buttons">
        <p className="newArray sortButton" onClick={newArray}>
          New Bars
        </p>
        <form onChange={sortingValueChange}>
          <input type="radio" name="Sorting" value="MergeSort" defaultChecked={sorting === "MergeSort" ? true : false}/> Merge Sort
          <br />
          <input type="radio" name="Sorting" value="SelectionSort" defaultChecked={sorting === "SelectionSort" ? true : false}/> Selection <br />
          <input type="radio" name="Sorting" value="QuickSort" defaultChecked={sorting === "QuickSort" ? true : false}/> Quick Sort
          <br />
          <input type="radio" name="Sorting" value="BubbleSort" defaultChecked={sorting === "BubbleSort" ? true : false}/> Bubble Sort
        </form>

        <p className="sortButton" onClick={startSort}>
          Start
        </p>
        <p className="sortButton" onClick={stopAnimation}>
          Stop
        </p>

        <div className="range">
          <h3>Speed</h3>
          <input type="range" value={speed} className="speed" step="1" min="1" max="200" onChange={newSpeed} />
        </div>
        <div className="range">
          <h3>Bars</h3>
          <input type="range" value={bars} className="bars" step="20" min="20" max="240" onChange={newBars} />
        </div>
      </div>
    </div>
  );
};

export default Visualizer;
