/* eslint-env jasmine */
// /* global mySplit, merge, mergeSort */

describe("Split Array function", function () {
  it("is able to split an array into two halves", function () {
    expect(mySplit([1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });
  it("handles odd arrays", function () {
    expect(mySplit([1, 2, 3, 4, 5])).toEqual([
      [1, 2],
      [3, 4, 5],
    ]);
  });
});

describe("Merge function", function () {
  it("is able to merge two sorted arrays into one sorted array", function () {
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(merge([1, 3, 5], [2, 4, 6, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 8, 9]);
  });
});
