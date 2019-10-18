const Mergesort = arrayArg => {
  let NewArray = [];
  let animations = [];
  for (let i = 0; i < arrayArg.length; i++) {
    NewArray.push({ v: arrayArg[i], index: i });
  }
  const unMerging = array => {
    if (array.length === 1) {
      return array;
    }

    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);
    let sorted = merge(unMerging(left), unMerging(right));
    return sorted;
  };
  const merge = (leftArg, rightArg) => {
    let newArray = [];

    let start = leftArg[0].index;
    while (leftArg.length !== 0 && rightArg.length !== 0) {
      let animation = {};
      animation.compare = [leftArg[0].index, rightArg[0].index];
      if (leftArg[0].v <= rightArg[0].v) {
        leftArg[0].index = start;
        start++;
        newArray.push(leftArg.shift());
      } else {
        animation.insert = [start, rightArg[0].index];
        rightArg[0].index = start;
        start++;
        newArray.push(rightArg.shift());
      }
      animations.push(animation);
    }
    if (leftArg.length === 0) {
      for (let x = 0; x < rightArg.length; x++) {
        rightArg[x].index = start;
        start++;
      }
    } else {
      for (let x = 0; x < leftArg.length; x++) {
        leftArg[x].index = start;
        start++;
      }
    }
    return [...newArray, ...leftArg, ...rightArg];
  };
  let sorted = unMerging(NewArray);
  console.log(sorted);
  return animations;
};

export default Mergesort;
