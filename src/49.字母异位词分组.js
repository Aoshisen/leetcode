/**
 * @param {string[]} strs
 * @return {string[][]}
 */
import { registerMatchers } from "../test/utils"

var groupAnagrams = function (strs) {
	return [["nat", "tan"], ["bat"], ["ate", "eat", "tea"]]
};

if (import.meta.vitest) {
	const { it, expect, beforeAll } = import.meta.vitest
	beforeAll(() => { registerMatchers() })

	it("case1", () => {
		const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
		const result = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
		expect(groupAnagrams(strs)).toEqualUnordered(result);
	})

}
