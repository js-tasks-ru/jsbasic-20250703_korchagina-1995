function isEmpty(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return;
  }

  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "подъём";

console.log(isEmpty(schedule)); // false