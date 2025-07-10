/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
	nums.sort((a, b) => a - b);
	const dp = [];
	for (let i = 0; i < nums.length; i++) {
		const current = nums[i];
		if (i === 0) {
			dp.push([current])
			continue;
		}
		const prev = nums[i - 1];
		if (prev === current - 1) {
			dp[dp.length - 1].push(current)
		} else if (prev < current - 1) {
			dp.push([current])
		}
	}
	return Math.max(...dp.map(i => i.length), 0)
};
if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest;
	it('case1', () => {
		const input = [100, 4, 200, 1, 3, 2];
		const result = 4;
		expect(longestConsecutive(input)).equal(result)
	})

	it('case2', () => {
		//3 6
		const input = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
		const result = 9;
		expect(longestConsecutive(input)).equal(result)
	})

	it('case3', () => {
		const input = [1, 0, 1, 2];
		const result = 3;
		expect(longestConsecutive(input)).equal(result)
	})

	it('case3', () => {
		const input = [];
		const result = 0;
		expect(longestConsecutive(input)).equal(result)
	})

}