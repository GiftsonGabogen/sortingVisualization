const Bubblesort = arrayArg => {
  let animations = [];
  for (let j = arrayArg.length; j > 0; j--) {
    let last = 0;
    for (let i = 0; i < arrayArg.length - 1; i++) {
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
