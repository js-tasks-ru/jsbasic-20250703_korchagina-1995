let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.map(num => num).filter(num => num >= a && num <= b);
}

filterRange(arr, 1, 4);

