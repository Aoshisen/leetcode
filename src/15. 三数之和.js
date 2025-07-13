import { registerMatchers } from "../test/utils"

var threeSum = function (nums) {
	const result = [];
	nums.sort((a, b) => a - b); // 先对数组进行排序

	for (let i = 0; i < nums.length - 2; i++) {
		// 跳过重复的元素
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		let left = i + 1;
		let right = nums.length - 1;

		while (left < right) {
			const sum = nums[i] + nums[left] + nums[right];

			if (sum === 0) {
				result.push([nums[i], nums[left], nums[right]]);
				// 跳过重复的元素
				while (left < right && nums[left] === nums[left + 1]) left++;
				while (left < right && nums[right] === nums[right - 1]) right--;
				left++;
				right--;
			} else if (sum < 0) {
				left++;
			} else {
				right--;
			}
		}
	}

	return result;
};
// var threeSum = function (nums) {
// 	const result = []
// 	for (let i = 0; i < nums.length; i++) {
// 		const i_num = nums[i];
// 		for (let j = i + 1; j < nums.length; j++) {
// 			const j_num = nums[j];
// 			for (let k = j + 1; k < nums.length; k++) {
// 				const k_num = nums[k];
// 				if (i_num + k_num + j_num === 0) {
// 					const current = [i_num, j_num, k_num]
// 					if (result.some(item => item.includes(i_num) && item.includes(k_num) && item.includes(j_num))) {
// 						continue;
// 					}
// 					result.push(current)
// 				}
// 			}

// 		}
// 	}
// 	return result;
// };

if (import.meta.vitest) {
	const { it, expect, beforeAll } = import.meta.vitest
	beforeAll(() => { registerMatchers() })

	it("case1", () => {
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