function camelize(str) {

  return str.split('').map((item, i, arr) => {
    if (arr[i - 1] === '-') {
      return item.toUpperCase();
    }
    if (item === '-') {
      return '';
    }
    return item;
  }).join('');

}


camelize("background-color");

