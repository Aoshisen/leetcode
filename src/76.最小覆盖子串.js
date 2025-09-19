/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
//先用t 的长度来进行滑动,然后通过滑动窗口内的值来判断是否满足要求
// 满足要求的情况是 滑动窗口里面的 s-slice 包含t的所有字符;
// 如果循环到最后还没有满足要求,那么开启新一次循环,从头开始,但是滑动窗口的窗口宽度加1
// 如果滑动窗口的长度为s的长度的时候,还没找到滑动窗口内的字符可以包含 t 的所有字符,那么返回空串
//时间复杂度为 O(n³)
var minWindow = function (s, t) {
	function containsAll(windowStr, target) {
		const windowCount = {};
		const targetCount = {};

		// 统计target中每个字符的出现次数
		for (let char of target) {
			targetCount[char] = (targetCount[char] || 0) + 1;
		}

		// 统计窗口中每个字符的出现次数
		for (let char of windowStr) {
			windowCount[char] = (windowCount[char] || 0) + 1;
		}

		// 检查窗口是否包含target的所有字符且数量足够
		for (let char in targetCount) {
			if (!windowCount[char] || windowCount[char] < targetCount[char]) {
				return false;
			}
		}
		return true;
	}

	// 从长度为t的窗口开始，逐渐增大窗口
	for (let len = t.length; len <= s.length; len++) {
		// 在当前长度下，滑动窗口遍历整个字符串
		for (let i = 0; i <= s.length - len; i++) {
			const window = s.slice(i, i + len);
			// 检查当前窗口是否满足条件
			if (containsAll(window, t)) {
				return window;
			}
		}
	}

	// 如果没找到满足条件的窗口，返回空字符串
	return "";

};

// 时间复杂度为O(|s| + |t|)
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
var minWindow = function (s, t) {
    if (s.length < t.length) return "";

    // 统计t中每个字符需要的数量
    const need = {};
    for (let char of t) {
        need[char] = (need[char] || 0) + 1;
    }

    let left = 0;           // 左指针
    let right = 0;          // 右指针
    let valid = 0;          // 满足条件的字符种类数
    const window = {};      // 滑动窗口中字符的统计

    let start = 0;          // 最小覆盖子串的起始索引
    let len = Infinity;     // 最小覆盖子串的长度

    while (right < s.length) {
        // 扩大窗口
        const c = s[right];
        right++;

        // 更新窗口数据
        if (need[c]) {
            window[c] = (window[c] || 0) + 1;
            // 当前字符数量满足需求
            if (window[c] === need[c]) {
                valid++;
            }
        }

        // 判断左侧窗口是否要收缩
        while (valid === Object.keys(need).length) {
            // 更新最小覆盖子串
            if (right - left < len) {
                start = left;
                len = right - left;
            }

            // 缩小窗口
            const d = s[left];
            left++;

            // 更新窗口数据
            if (need[d]) {
                if (window[d] === need[d]) {
                    valid--;
                }
                window[d]--;
            }
        }
    }

    // 返回最小覆盖子串
    return len === Infinity ? "" : s.substr(start, len);
};

if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest

	// 示例 1: 输入 s = "ADOBECODEBANC", t = "ABC"
	// 输出 "BANC"
	it("case1", () => {
		const s = "ADOBECODEBANC", t = "ABC";
		expect(minWindow(s, t)).toBe("BANC")
	})

	// 示例 2: 输入 s = "a", t = "a"
	// 输出 "a"
	it("case2", () => {
		const s = "a", t = "a";
		expect(minWindow(s, t)).toBe("a")
	})

	// 示例 3: 输入 s = "a", t = "aa"
	// 输出 ""
	it("case3", () => {
		const s = "a", t = "aa";
		expect(minWindow(s, t)).toBe("")
	})
}