const Bubblesort = arrayArg => {
  let animations = [];
  let j = arrayArg.length - 1;
  while (j > 0) {
    let last = 0;
    for (let i = 0; i < j; i++) {
      let animation = {};
      animation.compare = [i, i + 1];
      if (arrayArg[i] > arrayArg[i + 1]) {
        animation.swap = [i, i + 1];
        let temp = arrayArg[i];
        arrayArg[i] = arrayArg[i + 1];
        arrayArg[i + 1] = temp;
        last = i;
      }
      animations.push(animation);
    }
    j = last;
  }
  return animations;
};

export default Bubblesort;
