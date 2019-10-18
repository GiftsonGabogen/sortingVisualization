const mergeSort = (animations, stateArray, setArray) => {
  console.log(animations);
  let array = stateArray;
  const valueStick = document.getElementsByClassName("values");
  for (let i = 0; i < animations.length; i++) {
    setTimeout(() => {
      if (i > 0) {
        valueStick[animations[i - 1].compare[0]].style.backgroundColor =
          "green";
        valueStick[animations[i - 1].compare[1]].style.backgroundColor =
          "green";
        if (animations[i - 1].insert !== undefined) {
          valueStick[animations[i - 1].insert[0]].style.backgroundColor =
            "green";
          valueStick[animations[i - 1].insert[1]].style.backgroundColor =
            "green";
        }
      }
      if (animations[i].compare) {
        valueStick[animations[i].compare[0]].style.backgroundColor = "blue";
        valueStick[animations[i].compare[1]].style.backgroundColor = "blue";
      }
      if (i === animations.length - 1) {
        valueStick[animations[i].compare[0]].style.backgroundColor = "green";
        valueStick[animations[i].compare[1]].style.backgroundColor = "green";
      }

      if (animations[i].insert !== undefined) {
        valueStick[animations[i].insert[0]].style.backgroundColor = "red";
        valueStick[animations[i].insert[1]].style.backgroundColor = "red";
        let spliced = array.splice(animations[i].insert[1], 1);
        array.splice(animations[i].insert[0], 0, spliced[0]);
        setArray([...array]);
      }
      if (i === animations.length - 1) {
        for (let j = 0; j < valueStick.length; j++) {
          setTimeout(() => {
            valueStick[j].style.backgroundColor = "purple";
          }, j * 20);
        }
      }
    }, i * 100);
  }
};

export default mergeSort;
