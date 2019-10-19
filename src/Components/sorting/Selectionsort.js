const Selectionsort = ArrayArg => {
  let animations = [];
  let k = 0;
  for (let j = ArrayArg.length - 1; j > 0; j--) {
    let animation = {};
    let highest = 0;
    let index = 0;
    for (let i = 0; i < ArrayArg.length - k; i++) {
      animation = {};
      animation.compare = [index, i];
      if (ArrayArg[i] > highest) {
        highest = ArrayArg[i];
        index = i;
      }
      animations.push(animation);
    }
    animation = {};
    animation.compare = [index, j];
    animation.swap = [index, j];
    let temp = ArrayArg[j];
    ArrayArg[j] = highest;
    ArrayArg[index] = temp;
    animations.push(animation);
    k++;
  }
  return animations;
};

export default Selectionsort;
