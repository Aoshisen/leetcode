function longestPalindrome(str) {
  let palindrome = "";
  for (let index = 0; index < str.length; index++) {
    const char = str[index];
    let verb_char_index = str.lastIndexOf(char);
    while (verb_char_index >= index) {
      let currentPalindrome = str.slice(index, verb_char_index + 1);
      if (checkPalindrome(currentPalindrome)) {
        if (currentPalindrome.length >= palindrome.length) {
          palindrome = currentPalindrome;
        }
        verb_char_index = -1;
      } else {
        verb_char_index = str.lastIndexOf(char, verb_char_index - 1);
      }
    }
  }
  return palindrome;
}
function checkPalindrome(str) {
  for (let index = 0; index < str.length; index++) {
    const current = str[index];
    const current_verb = str[str.length - index - 1];
    if (current !== current_verb) {
      return false;
    }
  }
  return true;
}

const s1 = "babad";
const s2 = "cbbd";
const s3 = "a";
const s4 = "aacabdkacaa";
console.log(longestPalindrome(s1));
console.log(longestPalindrome(s2));
console.log(longestPalindrome(s3));
console.log(longestPalindrome(s4));
