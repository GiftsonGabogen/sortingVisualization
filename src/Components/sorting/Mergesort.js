const Mergesort = arrayArg => {
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
  const merge = (left, right) => {
    let newArray = [];
    while (left.length !== 0 && right.length !== 0) {
      if (left[0] > right[0]) {
        newArray.push(right.shift());
      } else {
        newArray.push(left.shift());
      }
    }
    return [...newArray, ...left, ...right];
  };
  return unMerging(arrayArg);
};

export default Mergesort;
