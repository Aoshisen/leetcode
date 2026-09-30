// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组是数组中的一个连续部分。 [动态规划，分治法，数组]
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let MAX = nums[0] || 0;
  let numbers = [];
  let prev_total = 0;
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    const current_total = prev_total + current;

    if (prev_total <= 0 && current > MAX) {
      //之前的所有值之和小于0，并且当前值大于之前的MAX 需要重置所有为当前的current;
      MAX = current;
      numbers = [current];
      prev_total = current;
    } else {
      //不需要重置添加当前项目 到最后
      if (current > prev_total && prev_total < 0) {
        //如果当前的值大于之前的总和，那么需要重置 numbers,prev_total
        numbers = [current];
        prev_total = current;
      } else {
        //不需要重置，往后加
        prev_total += current;
        numbers.push(current);
      }
      MAX = Math.max(MAX, current_total);
    }
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

  it("case4", () => {
    const input = [-1, -2];
    const result = -1;
    expect(maxSubArray(input)).toStrictEqual(result);
  });

  it("case5", () => {
    const input = [-1, 0, -2];
    const result = 0;
    expect(maxSubArray(input)).toStrictEqual(result);
  });

  it("case6", () => {
    const input = [8, -19, 5, -4, 20];
    const result = 21;
    expect(maxSubArray(input)).toStrictEqual(result);
  });

  it("case7", () => {
    const input = [-2, -1];
    const result = -1;
    expect(maxSubArray(input)).toStrictEqual(result);
  });

  it("case8", () => {
    const input = [-1, -1, -2, -2];
    const result = -1;
    expect(maxSubArray(input)).toStrictEqual(result);
  });

  it("case9", () => {
    const input = [8, -19, 5, -4, 20];
    const result = 21;
    expect(maxSubArray(input)).toStrictEqual(result);
  });

  it("case10", () => {
    const input = [31, -41, 59, 26, -53, 58, 97, -93, -23, 84];
    const result = 187;
    expect(maxSubArray(input)).toStrictEqual(result);
  });
}
