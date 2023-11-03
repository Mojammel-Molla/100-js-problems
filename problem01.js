// // inputArray =[1, 2, 1], elementToReplace = 1 and substractionElem = 3, the output should be arrayReplace(inputArray, elementToReplace, substractionElem) =[3,2,3]

function arrayReplace(inputArray, elementToReplace, substractionElem) {
  inputArray.forEach((element, idx) => {
    if (element === elementToReplace) {
      inputArray[idx] = substractionElem;
    }
  });
  console.log(inputArray);
}
arrayReplace([1, 2, 1], 1, 3);
