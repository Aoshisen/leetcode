function isPalindrome(s) {
  s = s + "";
  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    let verb_char = s[s.length - index - 1];
    if (char !== verb_char) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome(-121));
console.log(isPalindrome("ss"));
