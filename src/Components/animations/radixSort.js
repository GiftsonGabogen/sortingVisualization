const radixSort = (animations, speed) => {
  //Firstly Make Sure if There is animations present on the DOM then delete it before making another animation to prevent overlapping
  console.log(animations);
  if (global.Timeouts !== undefined || null || 0) {
    for (let stop = 0; stop < global.Timeouts.length; stop++) {
      clearTimeout(global.Timeouts[stop]);
    }
  }
  //empty the timeout variable if set already
  global.Timeouts = [];
  //make a copy of original heights of the bars to prevent overlapping heights when changing heights on iteration

  let valueStick = document.getElementsByClassName("values");

  let originalHeights = [[], [], []];
  for (let stick = 0; stick < valueStick.length; stick++) {
    originalHeights[0].push(valueStick[stick].clientHeight);
  }

  let newOriginalHeights = originalHeights[0].slice();
  /* 
  let timeoutAdd = 0;
  let x = 1;

  for (let i = 0; i < animations.length; i++) {
    let timeout;

    for (let j = 0; j < animations[i].length; j++) {
      timeout = setTimeout(() => {
        let two = originalHeights[i][j];
        valueStick[animations[i][j].insert].style.height = `${two}px`;
      }, (j + timeoutAdd) * speed);
      newOriginalHeights[animations[i][j].insert] = originalHeights[i][j];
      global.Timeouts.push(timeout);
      x++;
    }
    originalHeights[i + 1] = newOriginalHeights;
    timeoutAdd = x;
  } */
  let timeout;
  let x = 0;
  for (let j = 0; j < animations[0].length; j++) {
    timeout = setTimeout(() => {
      let two = originalHeights[0][j];
      if (j > 0) {
        valueStick[animations[0][j - 1].insert].style.backgroundColor = "#6dd47e";
      }
      valueStick[animations[0][j].insert].style.backgroundColor = "#ffd55a";
      valueStick[animations[0][j].insert].style.height = `${two}px`;
    }, j * speed);

    newOriginalHeights[animations[0][j].insert] = originalHeights[0][j];
    global.Timeouts.push(timeout);
    x++;
  }
  originalHeights[1] = newOriginalHeights;
  for (let j = 0; j < animations[1].length; j++) {
    timeout = setTimeout(() => {
      let two = originalHeights[1][j];
      if (j > 0) {
        valueStick[animations[1][j - 1].insert].style.backgroundColor = "#6dd47e";
      }
      valueStick[animations[1][j].insert].style.backgroundColor = "#ffd55a";
      valueStick[animations[1][j].insert].style.height = `${two}px`;
      if (j === animations[1].length - 1) {
        for (let b = 0; b < valueStick.length; b++) {
          let innertimeout = setTimeout(() => {
            valueStick[b].style.backgroundColor = "purple";
          }, b * (speed / 5));
          global.Timeouts.push(innertimeout);
        }
      }
    }, (x + j) * speed);
    global.Timeouts.push(timeout);
  }
};
export default radixSort;
