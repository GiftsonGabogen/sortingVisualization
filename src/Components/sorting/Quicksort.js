const Quicksort = arrayArg => {
  let animations = [];
  const partition = (arr, start, end, animations) => {
    let pivot = arr[end];
    let pindex = start;
    for (let i = start; i < end; i++) {
      let animation = {};
      animation.compare = [i, end];

      if (pivot > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[pindex];
        arr[pindex] = temp;
        animation.swap = [i, pindex];
        pindex++;
      }
      if (i === end - 1) {
        animation.end = true;
      }
      animations.push(animation);
    }
    let animation = {};
    animation.compare = [pindex, end];
    animation.swap = [pindex, end];
    animations.push(animation);
    let tempo = pivot;
    arr[end] = arr[pindex];
    arr[pindex] = tempo;
    return { pindex: pindex, animations: animations };
  };

  const quicksort = (arr, start, end, animations) => {
    if (start >= end) {
      return;
    }
    let index = partition(arr, start, end, animations);
    quicksort(arr, index.pindex + 1, end, index.animations);
    quicksort(arr, start, index.pindex - 1, index.animations);

    return { arr: arr, animations: animations };
  };
  quicksort(arrayArg, 0, arrayArg.length - 1, animations);
  return animations;
};

export default Quicksort;
