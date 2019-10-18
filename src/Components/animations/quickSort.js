const quickSort = (sortedArray, speed) => {
  const { animations } = sortedArray;
  for (let a = 0; a < animations.length; a++) {
    const { compare, swap } = animations[a];
    setTimeout(() => {
      const valueStick = document.getElementsByClassName("values");
      //if an element is comparing, turn it's color to green
      valueStick[compare[1]].style.backgroundColor = "blue";
      valueStick[compare[0]].style.backgroundColor = "blue";
      //for resetting color of previous loops to green
      if (a > 0) {
        valueStick[animations[a - 1].compare[0]].style.backgroundColor =
          "green";
        if (animations[a - 1].swap !== undefined || null) {
          valueStick[animations[a - 1].swap[0]].style.backgroundColor = "green";
          valueStick[animations[a - 1].swap[1]].style.backgroundColor = "green";
        }
        //if the first iteration on quicksort is done the pivot property is change so the previous pivot color will be turn back into green
        if (animations[a - 1].end === true) {
          valueStick[animations[a - 1].compare[1]].style.backgroundColor =
            "green";
        }
      }
      //if we're swapping the color will turn blue
      if (swap !== undefined || null) {
        valueStick[swap[1]].style.backgroundColor = "red";
        valueStick[swap[0]].style.backgroundColor = "red";
        //swap heights
        let one = valueStick[swap[1]].clientHeight;
        let two = valueStick[swap[0]].clientHeight;
        valueStick[swap[0]].style.height = `${one}px`;
        valueStick[swap[1]].style.height = `${two}px`;
      }
      //if the whole quicksort is finished turn all the color of the bars purple
      if (a === animations.length - 1) {
        for (let b = 0; b < valueStick.length; b++) {
          setTimeout(() => {
            valueStick[b].style.backgroundColor = "purple";
          }, b * 50);
        }

        /* valueStick[compare[1]].style.backgroundColor = "green";
        valueStick[compare[0]].style.backgroundColor = "green";
        valueStick[swap[1]].style.backgroundColor = "green";
        valueStick[swap[0]].style.backgroundColor = "green"; */
      }
    }, a * speed);
  }
};
export default quickSort;
