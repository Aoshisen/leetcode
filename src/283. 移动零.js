/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	//b 是后一个元素,a是前一个元素
	return nums.sort((b, a) => {
		//-1 是需要调换位置,1 是不需要调换位置
		return (a === 0) ? -1 : 1
	})
};

if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest
	it("case1", () => {
		const input = [0, 1, 0, 3, 12]
		const result = [1, 3, 12, 0, 0];
		expect(moveZeroes(input)).toStrictEqual(result)
	})
}