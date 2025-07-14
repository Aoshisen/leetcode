/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	let result = 0;
	let left = 0;
	let right = 0;
	for (let i = 1; i < height.length; i++) {
		const currentValue = height[i]
		const leftValue = height[left]
		const rightValue = height[right]
		if (left === 0 && currentValue > 0) {
			console.log(" 初始", i)
			//给左边的锚点赋初值
			left = i;
			right = i;
			continue;
		}
		//走下坡(当前的值小于右边的值 或者是当前的值小于左边的值)
		if (currentValue < leftValue) {
			console.log("当前值比 左边的值小", i)
			right = i
		} else if (currentValue >= leftValue) {
			//制高点了
			right = i;
			left = i
			console.log(" 制高点", currentValue)
		}
	}
	return 6
};

if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest

	it.only("case1", () => {
		const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
		const result = 6
		expect(trap(input)).equal(result);
	})

	it("case1", () => {
		const input = [4, 2, 0, 3, 2, 5]
		const result = 9
		expect(trap(input)).equal(result);
	})

}
