// function bubbleSort(array) {
//   let count = 1;
//   while (count < array.length) {
//     let swapCount = 0
//     for (let i = 0; i < array.length - 1; i++) {
//       if (array[i] > array[i + 1]) {
//         let bubble = swap(array[i], array[i + 1]);
//         swapCount++
//         array[i] = bubble[0];
//         array[i + 1] = bubble[1];
//       }
//     }
//     count++;
//   }
//   return array;
// }

function swap(num1, num2) {
  return [num2, num1];
}

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length; j++) {
      debugger;
      if (array[j] > array[j + 1]) {
        let bubble = swap(array[j], array[j + 1]);
        array[j] = bubble[0];
        array[j + 1] = bubble[1];
      }
    }
  }

  return array;
}
