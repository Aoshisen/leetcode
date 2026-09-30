//暴力解法
// function maxArea(heights) {
//   let result = 0;
//   const length = heights.length;
//   for (let i = 0; i < length - 1; i++) {
//     let beforeHeight = heights[i];
//     for (let j = i + 1; j < length; j++) {
//       const afterHeight = heights[j];
//       const width = calcWith(i, j);
//       const area = width * findMin(beforeHeight, afterHeight);
//       result = findMax(area, result);
//     }
//   }
//   return result;
// }

// function findMax(num1, num2) {
//   return Math.max(num1, num2);
// }

// function findMin(num1, num2) {
//   return Math.min(num1, num2);
// }

// function calcWith(from, to) {
//   return Math.abs(from - to);
// }

//双指针解法

function maxArea(height) {
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const currentWidth = right - left;
    const currentHeight = Math.min(height[left], height[right]);
    const currentWater = currentWidth * currentHeight;
    maxWater = Math.max(maxWater, currentWater);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}
if (import.meta.vitest) {
  const { it, expect, beforeAll } = import.meta.vitest

  it("case1", () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
    const result = 49
    expect(maxArea(height)).toStrictEqual(result);
  })

  it("case2", () => {
    const height = [1, 1]
    const result = 1
    expect(maxArea(height)).toStrictEqual(result);
  })
}