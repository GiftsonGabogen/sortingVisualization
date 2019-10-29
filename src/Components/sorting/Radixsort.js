const Radixsort = ArrayArg => {
  let FullAnimations = [];
  let longestChar = scanLongestChar(ArrayArg);
  for (let animate = longestChar - 1; animate >= 0; animate--) {
    console.log(ArrayArg);
    let FactionsLengths = getAllLengths(ArrayArg, animate);
    let factionStarts = [
      { start: 0 },
      { start: 0 },
      { start: 0 },
      { start: 0 },
      { start: 0 },
      { start: 0 },
      { start: 0 },
      { start: 0 },
      { start: 0 },
      { start: 0 }
    ];
    for (let i = 1; i < factionStarts.length; i++) {
      factionStarts[i].start = FactionsLengths[i - 1] + factionStarts[i - 1].start;
    }
    let data = sort(ArrayArg, factionStarts, animate);
    ArrayArg = data.array;
    FullAnimations.push(data.Animations);
  }
  return FullAnimations;
};

const sort = (arr, factionStart, pos) => {
  let animation = {};
  let zero = [];
  let one = [];
  let two = [];
  let three = [];
  let four = [];
  let five = [];
  let six = [];
  let seven = [];
  let eigth = [];
  let nine = [];
  let Animations = [];
  let array = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i].toString().charAt(pos)) {
      case "0":
        animation = {};
        animation.insert = [factionStart[0].start + zero.length];
        Animations.push(animation);
        zero.push(arr[i]);
        break;
      case "1":
        animation = {};
        animation.insert = [factionStart[1].start + one.length];
        Animations.push(animation);
        one.push(arr[i]);
        break;
      case "2":
        animation = {};
        animation.insert = [factionStart[2].start + two.length];
        Animations.push(animation);
        two.push(arr[i]);
        break;
      case "3":
        animation = {};
        animation.insert = [factionStart[3].start + three.length];
        Animations.push(animation);
        three.push(arr[i]);
        break;
      case "4":
        animation = {};
        animation.insert = [factionStart[4].start + four.length];
        Animations.push(animation);
        four.push(arr[i]);
        break;
      case "5":
        animation = {};
        animation.insert = [factionStart[5].start + five.length];
        Animations.push(animation);
        five.push(arr[i]);
        break;
      case "6":
        animation = {};
        animation.insert = [factionStart[6].start + six.length];
        Animations.push(animation);
        six.push(arr[i]);
        break;
      case "7":
        animation = {};
        animation.insert = [factionStart[7].start + seven.length];
        Animations.push(animation);
        seven.push(arr[i]);
        break;
      case "8":
        animation = {};
        animation.insert = [factionStart[8].start + eigth.length];
        Animations.push(animation);
        eigth.push(arr[i]);
        break;
      case "9":
        animation = {};
        animation.insert = [factionStart[9].start + nine.length];
        Animations.push(animation);
        nine.push(arr[i]);
        break;
      default:
        animation = {};
        animation.insert = [factionStart[0].start + zero.length];
        Animations.push(animation);
        zero.push(arr[i]);
        break;
    }
  }
  array = [...zero, ...one, ...two, ...three, ...four, ...five, ...six, ...seven, ...eigth, ...nine];
  return { array, Animations };
};

const scanLongestChar = arr => {
  let longest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().length > longest) {
      longest = arr[i].toString().length;
    }
  }
  return longest;
};

const getAllLengths = (arr, pos) => {
  let faction = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i].toString().charAt(pos)) {
      case "0":
        faction[0]++;
        break;
      case "1":
        faction[1]++;
        break;
      case "2":
        faction[2]++;
        break;
      case "3":
        faction[3]++;
        break;
      case "4":
        faction[4]++;
        break;
      case "5":
        faction[5]++;
        break;
      case "6":
        faction[6]++;
        break;
      case "7":
        faction[7]++;
        break;
      case "8":
        faction[8]++;
        break;
      case "9":
        faction[9]++;
        break;
      default:
        faction[0]++;
        break;
    }
  }
  return faction;
};

export default Radixsort;
