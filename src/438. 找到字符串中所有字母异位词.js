/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
var findAnagrams = function (s, p) {
	let result = [];
	const sArray = s.split('');
	const pArray = p.split("").sort();
	console.log(pArray, "<<<<<<<")
	for (let i = 0; i < sArray.length - (pArray.length - 1); i++) {
		const currentArray = sArray.slice(i, i + pArray.length);
		console.log(currentArray);
		const isInPArray = currentArray.sort().every((item, i) => item === pArray[i]);
		if (isInPArray) {
			result.push(i)
		}
	}
	return result;
};

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