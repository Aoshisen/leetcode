/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	return 4

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
