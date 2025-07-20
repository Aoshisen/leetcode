const sum = (arr) => arr.reduce((a, b) => a + b, 0);
var trap = function (height) {
	let result = 0;
	let left = 0;
	let right = 0;
	let collect = []
	for (let i = 0; i < height.length; i++) {
		const currentValue = height[i]

		const leftValue = height[left]
		if (currentValue < leftValue) {
			//当前值小于左值;
			//如果当前值是后面值的最大值那么说明当前值是一个新的左边界
			if (isLargest(currentValue, height.slice(left + 1))) {
				//当前值是一个新的左边界
				left = i;
			} else {
				//如果当前的值并不是后面值的最大值
				//更新右边的边界,
				right = i;
				collect.push(currentValue);
			}
		}
		else {
			//当前值大于或者等于左值
			//更新右边的值
			//当前是一个勾的右边界也是下一个勾的左边界限
			//计算当前collect的积水
			// console.log("left", left, "right", right)
			result += Math.min(leftValue, currentValue) * collect.length - sum(collect);
			right = i;
			left = i;
			collect = [];
		}
	}
	return result;
};

const isLargest = (value, arr) => {
	return arr.every(item => item <= value);
}



if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest

	it("case1", () => {
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
