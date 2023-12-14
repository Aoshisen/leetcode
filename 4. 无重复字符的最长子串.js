/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let currentSubstring = "";
  for (let char of s) {
    let index = currentSubstring.indexOf(char);
    if (index !== -1) {
      //滑动当前窗口的左边界
      //当前字段重复出现在当前缓存的字符串中,那么从currentSubstring 里面 出现的同样字符位置起 截取字符作为下一个 currentSubstring;
      currentSubstring = currentSubstring.slice(index + 1);
    }
    //滑动当前窗口的右边界
    currentSubstring += char;
    maxLength = Math.max(maxLength, currentSubstring.length);
  }
  return maxLength;
};

// 输入: s = "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

const result = lengthOfLongestSubstring("abcabcbb");
// const result2 = lengthOfLongestSubstring("bbbbbbb");
// const result3 = lengthOfLongestSubstring("pwwkew");
// const result4 = lengthOfLongestSubstring("");

console.log(result);
