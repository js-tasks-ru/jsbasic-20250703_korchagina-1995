let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false,
}

function sumSalary(salaries) {
  let sum = 0;

  for (const key in salaries) {
    const element = salaries[key];

    if (isFinite(element) === false) {
      continue;
    } else {
      sum += element;
    }
  }

  return sum;
}
