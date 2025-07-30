function getMinMax(str) {
  const numbers = str.match(/-?\d+(\.\d+)?/g)?.map(Number);

  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return { min, max };
}


