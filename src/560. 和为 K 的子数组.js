/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let prefixSum = new Map();
    prefixSum.set(0, 1); // 初始前缀和为 0 出现 1 次
    let currentSum = 0;
    let count = 0;

    for (let num of nums) {
        currentSum += num;
        if (prefixSum.has(currentSum - k)) {
            count += prefixSum.get(currentSum - k);
        }
        prefixSum.set(currentSum, (prefixSum.get(currentSum) || 0) + 1);
    }

    return count;
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