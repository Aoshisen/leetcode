/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function (nums) {
// 	nums.sort((a, b) => a - b);
// 	let temp = [], result = 0;
// 	for (let i = 0; i < nums.length; i++) {
// 		const current = nums[i];
// 		if (i === 0) {
// 			temp.push(current)
// 			continue
// 		}
// 		const prev = nums[i - 1];
// 		const sub = (current - 1) - prev;

// 		if (sub === 0) {
// 			temp.push(current)
// 		}
// 		else if (sub > 0) {
// 			result = Math.max(temp.length, result)
// 			temp = [current]
// 		}
// 	}
// 	return Math.max(result, temp.length);
// };
var longestConsecutive = function(nums) {
    const numsSet = new Set(nums)
    let count = 0
    for (const x of numsSet) {
        if (numsSet.has(x - 1)) continue
        let y = x + 1
        while (numsSet.has(y)) {
            y++
        }
        count = Math.max(count, y - x)
    }
    return count
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

	it('case3', () => {
		const input = [0];
		const result = 1;
		expect(longestConsecutive(input)).equal(result)
	})
	it('case3', () => {
		const input = [0, 0];
		const result = 1;
		expect(longestConsecutive(input)).equal(result)
	})

	it('case3', () => {
		const input = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
		const result = 7;
		expect(longestConsecutive(input)).equal(result)
	})

}