const mergeSort = (animations, stateArray, setArray, speed) => {
  let array = stateArray;
  const valueStick = document.getElementsByClassName("values");
  for (let i = 0; i < animations.length; i++) {
    setTimeout(() => {
      if (i > 0) {
        valueStick[animations[i - 1].compare[0]].style.backgroundColor =
          "#6dd47e";
        valueStick[animations[i - 1].compare[1]].style.backgroundColor =
          "#6dd47e";
        if (animations[i - 1].insert !== undefined) {
          valueStick[animations[i - 1].insert[0]].style.backgroundColor =
            "#6dd47e";
          valueStick[animations[i - 1].insert[1]].style.backgroundColor =
            "#6dd47e";
        }
      }
      if (animations[i].compare) {
        valueStick[animations[i].compare[0]].style.backgroundColor = "#293250";
        valueStick[animations[i].compare[1]].style.backgroundColor = "#293250";
      }
      if (i === animations.length - 1) {
        valueStick[animations[i].compare[0]].style.backgroundColor = "#6dd47e";
        valueStick[animations[i].compare[1]].style.backgroundColor = "#6dd47e";
      }

      if (animations[i].insert !== undefined) {
        valueStick[animations[i].insert[0]].style.backgroundColor = "#ffd55a";
        valueStick[animations[i].insert[1]].style.backgroundColor = "#ffd55a";
        let spliced = array.splice(animations[i].insert[1], 1);
        array.splice(animations[i].insert[0], 0, spliced[0]);
        setArray([...array]);
      }
      if (i === animations.length - 1) {
        for (let j = 0; j < valueStick.length; j++) {
          valueStick[j].style.backgroundColor = "#6dd47e";
          setTimeout(() => {
            valueStick[j].style.backgroundColor = "purple";
          }, j * (speed / 3));
        }
      }
    }, i * speed);
  }
};

export default mergeSort;
