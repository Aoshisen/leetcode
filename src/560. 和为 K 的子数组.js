/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
	let result = 0;
	for (let index = 0; index < nums.length; index++) {
		// 从当前位置向后看有无和为k的
		let currentIndex = index;
		let sum = nums[index];
		while (currentIndex < nums.length) {
			if (sum === k) {
				result += 1;
			}
			currentIndex++
			sum += nums[currentIndex]
		}
	}
	return result;
};

if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest
	it("case1", () => {

		const nums = [1, 1, 1], k = 2;
		const result = 2
		expect(subarraySum(nums, k)).toBe(result)
	})

	it("case2", () => {
		const nums = [1, 2, 3], k = 3
		const result = 2
		expect(subarraySum(nums, k)).toBe(result)
	})

	it("case2", () => {
		const nums = [1, -1, 0], k = 0
		const result = 3
		expect(subarraySum(nums, k)).toBe(result)
	})
}