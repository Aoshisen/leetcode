/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function (nums, k) {
// 	let result = [];
// 	let currentWindow = new Array(k).fill(0);
// 	for (let i = 0; i < nums.length; i++) {
// 		const current = nums[i];
// 		if (i < k) {
// 			currentWindow[i] = current;
// 		} else {
// 			//删除第一个,添加最后一个
// 			// console.log(currentWindow, "<<<<<<<<")
// 			currentWindow = currentWindow.slice(1);
// 			currentWindow.push(current)
// 		}
// 		if (i >= k - 1) {
// 			result.push(Math.max(...currentWindow))
// 		}
// 	}
// 	return result;
// };
// var maxSlidingWindow = function (nums, k) {
//     let result = [];
//     let deque = []; // 双端队列，存储索引

//     for (let i = 0; i < nums.length; i++) {
//         // 移除队列中不在窗口范围内的元素
//         if (deque.length > 0 && deque[0] < i - k + 1) {
//             deque.shift();
//         }

//         // 移除队列中所有比当前元素小的元素（保持队列单调递减）
//         while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
//             deque.pop();
//         }

//         // 将当前元素的索引加入队列
//         deque.push(i);

//         // 当窗口大小达到 k 时，将当前窗口的最大值加入结果
//         if (i >= k - 1) {
//             result.push(nums[deque[0]]);
//         }
//     }

//     return result;
// };
var maxSlidingWindow = function(nums, k) {
        const n = nums.length
    const p = new Int16Array(n)
    const s = new Int16Array(n)
    const r = new Int16Array(n - k + 1)
    let i = n, j = -1
    while (i--) {
        p[++j] = j % k ? Math.max(p[j - 1], nums[j]) : nums[j]
        s[i]   = i % k ? Math.max(s[i + 1], nums[i]) : nums[i]
    }
    while (i++ < n - k) r[i] = Math.max(s[i], p[i + k - 1])
    return r
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