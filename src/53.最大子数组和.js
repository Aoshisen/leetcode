// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组是数组中的一个连续部分。 [动态规划，分治法，数组]
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  let MAX = nums[0] || 0;
  let numbers = [];
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    numbers.push(current);
    if (numbers.length === 1) {
      MAX = current;
    } else if (numbers[0] < 0) {
      MAX = current + MAX - numbers[0];
      numbers.shift();
    } else if (current > MAX) {
      numbers = [current];
      MAX = current;
    } else {
      const currentSUM = numbers.reduce((acc, cur) => {
        return acc + cur;
      }, 0);
      MAX = Math.max(currentSUM, MAX);
    }
    // console.log(MAX, numbers);
  }
  return MAX;
};

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("case1", () => {
    const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; //[4,-1,2,1]
    const result = 6;
    expect(maxSubArray(input)).toStrictEqual(result);
  });

  //[-2] -2
  //[-2,1] -1 [1] 1
  // [-2,1,-3] -4; [1,-3] -2 如果舍弃第一项 大于现在的值那么舍弃 如果当前数组的第一项
  // [-2,1,-3,4]  [1,-3,4] [4] 舍弃1，-3，[4]
  // [-2,1,-3,4,-1] [4,-1] 3 不舍弃
  //如果当前数组的第一项为负数，那么舍弃，如果当前插入项大于 总和,那么舍弃所有，如果当前插入项小于 总和,那么插入

  it("case2", () => {
    const input = [1];
    const result = 1;
    expect(maxSubArray(input)).toStrictEqual(result);
  });

  it("case3", () => {
    const input = [5, 4, -1, 7, 8];
    const result = 23;
    expect(maxSubArray(input)).toStrictEqual(result);
  });
}
