// Make an array for sorting data between array elements
function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    return 'Invalid Input';
  } else if (arr[0] > arr[1]) {
    return arr;
  } else if (arr[0] < arr[1]) {
    return ([arr[0], arr[1]] = [arr[1], arr[0]]);
  } else if (arr[0] == arr[1]) {
    return 'equal';
  }
}

console.log(sortMaker([4, 4]));
