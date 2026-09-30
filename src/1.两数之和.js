/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    //数字对应 下标
    map.set(num, i);
  }
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const another = target - num;
    if (map.has(another) && map.get(another) != i) {
      return [i, map.get(another)];
    }
  }
  return [];
};

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("case1", () => {
    const nums = [2, 7, 11, 15],
      target = 9;
    const result = [0, 1];
    expect(twoSum(nums, target)).toStrictEqual(result);
  });

  it("case2", () => {
    const nums = [3, 2, 4],
      target = 6;
    const result = [1, 2];
    expect(twoSum(nums, target)).toStrictEqual(result);
  });

  it.only("case3", () => {
    const nums = [3, 3],
      target = 6;
    const result = [0, 1];
    expect(twoSum(nums, target)).toStrictEqual(result);
  });
}
