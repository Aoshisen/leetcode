/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	const prevMulti = [1];
	const nextMulti = [1];
	for (let index = 1; index < nums.length; index++) {
		prevMulti.push(prevMulti[index - 1] * nums[index - 1])
	}
	for (let index = nums.length; index > 1; index--) {
		nextMulti.push(nextMulti[nextMulti.length - 1] * nums[index - 1])
	}
	return nums.map((num, index) => prevMulti[index] * nextMulti[nextMulti.length - 1 - index])
};

if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest
	expect.addEqualityTesters([
		(a, b) => {
			if (typeof a === 'number' && typeof b === 'number') {
				return a === b; // +0 === -0 为 true
			}
			return undefined;
		}
	]);
	it("case1", () => {
		const nums = [1, 2, 3, 4]
		const result = [24, 12, 8, 6]
		expect(productExceptSelf(nums)).toStrictEqual(result)
	})

	it("case2", () => {
		const nums = [-1, 1, 0, -3, 3]
		const result = [0, 0, 9, 0, 0]
		expect(productExceptSelf(nums)).toEqual(result)
	})
}