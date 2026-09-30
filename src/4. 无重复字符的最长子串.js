function lengthOfLongestSubstring(str) {
  let maxLength = 0;
  let currentSubstring = "";
  for (const char of str) {
    const charIndexOfCurrentSubstring = currentSubstring.indexOf(char);
    const isCharInCurrentSubstring = charIndexOfCurrentSubstring !== -1;
    if (isCharInCurrentSubstring) {
      //如果当前的字符被包含在之前的字符中,移动窗口的左边界到不包含该字符处(收缩当前窗口到正好不包含当前字符的位置)
      currentSubstring = currentSubstring.slice(
        charIndexOfCurrentSubstring + 1
      );
      //然后再添加上新的当前字符,这时候这个字符就保证了在currentSubstring 里面的唯一性,因为之前收缩窗口的时候已经收缩到了刚好没有char 的位置;
      currentSubstring += char;
    } else {
      //如果当前的值没有被包含到currentSubstring 里面,那么当前字符串添加到currentSubstring 里面
      currentSubstring += char;
    }
    //对maxLength 赋值,
    maxLength = Math.max(maxLength, currentSubstring.length);
  }
  return maxLength;
}



if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("case1", () => {
    const s = "abcabcbb"
    const result = 3
    expect(lengthOfLongestSubstring(s)).toStrictEqual(result);
  });

  it("case2", () => {
    const s = "bbbbb"
    const result = 1
    expect(lengthOfLongestSubstring(s)).toStrictEqual(result);
  });

  it("case3", () => {
    const s = "pwwkew"
    const result = 3
    expect(lengthOfLongestSubstring(s)).toStrictEqual(result);
  });

}