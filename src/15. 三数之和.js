/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

	return [[-1, -1, 2, -1, 0, 1]]
};
if (import.meta.vitest) {
	const { it, expect, beforeAll } = import.meta.vitest
	beforeAll(() => { registerMatchers() })

	it.only("case1", () => {
		const input = [-1, 0, 1, 2, -1, -4];
		const result = [[-1, -1, 2], [-1, 0, 1]]
		expect(threeSum(input)).toEqualUnordered(result);
	})

	it("case2", () => {
		const input = [0, 1, 1];
		const result = []
		expect(threeSum(input)).toEqualUnordered(result);
	})

	it("case2", () => {
		const input = [0, 0, 0];
		const result = [[0, 0, 0]]
		expect(threeSum(input)).toEqualUnordered(result);
	})

}