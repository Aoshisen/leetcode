/**
 * @param {string[]} strs
 * @return {string[][]}
 */
import { registerMatchers } from "../test/utils"

var groupAnagrams = function (strs) {
	const map = new Map()
	for (let index = 0; index < strs.length; index++) {
		const current = strs[index];
		const key = [...current].sort().join("");
		const value = map.get(key);
		if (!value) {
			map.set(key, [current])
		} else {
			map.set(key, [...value, current])
		}
	}
	return Array.from(map.values())
};

if (import.meta.vitest) {
	const { it, expect, beforeAll } = import.meta.vitest
	beforeAll(() => { registerMatchers() })

	it("case1", () => {
		const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
		const result = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
		expect(groupAnagrams(strs)).toEqualUnordered(result);
	})

	it("case2", () => {
		const strs = [""];
		const result = [[""]]
		expect(groupAnagrams(strs)).toEqualUnordered(result);
	})

	it("case2", () => {
		const strs = ["a"];
		const result = [["a"]]
		expect(groupAnagrams(strs)).toEqualUnordered(result);
	})

}
