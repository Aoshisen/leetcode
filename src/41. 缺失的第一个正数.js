/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
	const processed = nums.filter(item => item > 0).sort((a, b) => a - b)
	if (processed.length === 0) {
		return 1
	}
	if (processed[0] > 1) {
		return 1
	}
	else {
		for (let i = 1; i < processed.length; i++) {
			const prev = processed[i - 1];
			if (processed[i] - prev > 1) {
				return prev + 1
			}
		}
		return processed[processed.length - 1] + 1
	}

};

if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest
	it("case1", () => {
		const nums = [1, 2, 0]
		const result = 3
		expect(firstMissingPositive(nums)).toStrictEqual(result)
	})

	it("case2", () => {
		const nums = [3, 4, -1, 1]
		const result = 2
		expect(firstMissingPositive(nums)).toStrictEqual(result)
	})

	it("case3", () => {
		const nums = [0]
		const result = 1
		expect(firstMissingPositive(nums)).toStrictEqual(result)
	})
}