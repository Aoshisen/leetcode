/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	let result = [];
	let currentMax = -Infinity;
	for (let i = 0; i < nums.length; i++) {
		const current = nums[i];
		currentMax = Math.max(currentMax, current);
		if (i >= k - 1) {
			result.push(Math.max(...nums.slice(i - k + 1, i + 1)))
		}
	}
	return result;
};
if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest
	it("case1", () => {
		const nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
		const result = [3, 3, 5, 5, 6, 7]
		expect(maxSlidingWindow(nums, k)).toStrictEqual(result)
	})

	it("case2", () => {
		const nums = [1], k = 1
		const result = [1]
		expect(maxSlidingWindow(nums, k)).toStrictEqual(result)
	})

}