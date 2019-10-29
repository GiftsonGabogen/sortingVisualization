const mergeSort = data => {
  const { animations, stateArray, setArray, speed } = data;
  //Firstly Make Sure if There is animations present on the DOM then delete it before making another animation to prevent overlapping
  if (global.Timeouts !== undefined || null || 0) {
    for (let stop = 0; stop < global.Timeouts.length; stop++) {
      clearTimeout(global.Timeouts[stop]);
    }
  }
  //empty the timeout variable if set already
  global.Timeouts = [];
  let array = stateArray;
  const valueStick = document.getElementsByClassName("values");
  for (let i = 0; i < animations.length; i++) {
    let timeout = setTimeout(() => {
      if (i > 0) {
        valueStick[animations[i - 1].compare[0]].style.backgroundColor = "#6dd47e";
        valueStick[animations[i - 1].compare[1]].style.backgroundColor = "#6dd47e";
        if (animations[i - 1].insert !== undefined) {
          valueStick[animations[i - 1].insert[0]].style.backgroundColor = "#6dd47e";
          valueStick[animations[i - 1].insert[1]].style.backgroundColor = "#6dd47e";
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
          let innertimeout = setTimeout(() => {
            valueStick[j].style.backgroundColor = "purple";
          }, j * (speed / 3));
          global.Timeouts.push(innertimeout);
        }
      }
    }, i * speed);
    global.Timeouts.push(timeout);
  }
};

export default mergeSort;
