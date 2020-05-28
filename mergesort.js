function mySplit(wholeArray) {
  let firstHalf;
  let secondHalf;

  if (wholeArray.length % 2 === 0) {
    firstHalf = wholeArray.splice(0, wholeArray.length / 2);
  } else {
    firstHalf = wholeArray.splice(0, Math.floor(wholeArray.length / 2));
  }
  secondHalf = wholeArray;
  console.log("firstHalf ", firstHalf);
  console.log("second half ", secondHalf);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let mergedArray = [];

  while (arr2.length && arr1.length) {
    let pointer1 = arr1[0];
    let pointer2 = arr2[0];
    if (pointer1 < pointer2) {
      mergedArray.push(arr1.shift());
    } else {
      mergedArray.push(arr2.shift());
    }
  }

  return [...mergedArray, ...arr2, ...arr1];
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const splitArray = mySplit(array);
  const firstHalf = splitArray[0];
  const secondHalf = splitArray[1];

  const sortedFirstHalf = mergeSort(firstHalf);
  const sortedSecondHalf = mergeSort(secondHalf);
  console.log("sorted first half: ", sortedFirstHalf);
  console.log("sorted second half ", sortedSecondHalf);

  return merge(sortedFirstHalf, sortedSecondHalf);
}

console.log(mergeSort([4, 2, 5, 1, 3]));
