/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// // 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
// var findAnagrams = function (s, p) {
// 	let result = [];
// 	const sArray = s.split('');
// 	const pArray = p.split("").sort();
// 	console.log(pArray, "<<<<<<<")
// 	for (let i = 0; i < sArray.length - (pArray.length - 1); i++) {
// 		const currentArray = sArray.slice(i, i + pArray.length);
// 		console.log(currentArray);
// 		const isInPArray = currentArray.sort().every((item, i) => item === pArray[i]);
// 		if (isInPArray) {
// 			result.push(i)
// 		}
// 	}
// 	return result;
// };
var findAnagrams = function (s, p) {
	const result = [];
	const pCount = new Array(26).fill(0); // 记录 p 中每个字符的频率
	const sCount = new Array(26).fill(0); // 记录当前窗口中每个字符的频率
	const aCharCode = 'a'.charCodeAt(0);

	// 初始化 p 的字符频率
	for (const char of p) {
		pCount[char.charCodeAt(0) - aCharCode]++;
	}

	const pLength = p.length;
	const sLength = s.length;

	// 从右到左滑动窗口
	for (let i = 0; i < sLength; i++) {
		sCount[s[i].charCodeAt(0) - aCharCode]++;

		// 移除窗口左侧多余的字符
		if (i >= pLength) {
			sCount[s[i - pLength].charCodeAt(0) - aCharCode]--;
		}

		// 比较窗口和 p 的字符频率
		if (arraysEqual(sCount, pCount)) {
			result.push(i - pLength + 1); // 起始索引为当前索引减去窗口长度加 1
		}
	}

	return result;
};

// 辅助函数：比较两个数组是否相等
function arraysEqual(arr1, arr2) {
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
}
if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest
	it("case1", () => {
		let s = "cbaebabacd", p = "abc";
		const result = [0, 6]
		expect(findAnagrams(s, p)).toStrictEqual(result)
	})

	it("case2", () => {
		let s = "abab", p = "ab"
		const result = [0, 1, 2]
		expect(findAnagrams(s, p)).toStrictEqual(result)
	})

}