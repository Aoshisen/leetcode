function myAtoi(s) {
  const numReg = /^\s*[-+]?\d+/;
  const matched = numReg.exec(s);
  const MIN = -Math.pow(2, 31);
  const MAX = Math.pow(2, 31) - 1;
  let result = +matched;
  result = Math.max(result, MIN);
  result = Math.min(result, MAX);
  return result;
}

console.log(myAtoi("words and 987"));
