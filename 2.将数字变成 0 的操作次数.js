// 给你一个非负整数 num ，请你返回将它变成 0 所需要的步数。 如果当前数字是偶数，你需要把它除以 2 ；否则，减去 1 。
/**
 * @param {number} num
 * @return {number}
 */

// 自己的解法
var numberOfSteps = function (num) {
  let step = 0;
  while (num) {
    num = num % 2 ? num - 1 : num / 2;
    step += 1;
  }
  return step;
};

// 官方的解法

var numberOfSteps = function (num) {
  let step = 0;
  while (num) {
    step += (num > 1 ? 0 : 1) + (num & 0x01);
    num >>= 1;
  }
};
