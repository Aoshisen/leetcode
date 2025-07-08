function reverse(x) {
  let symbol = "";
  if (x < 0) {
    symbol = "-";
  }
  const X = Math.abs(x);
  const X_string = X + "";
  const reversed_string = X_string.split("").reverse().join("");
  const reversed_number = +reversed_string;
  const MAX = Math.pow(2, 31);
  if (reversed_number > MAX) {
    return 0;
  }
  let result;
  if (symbol) {
    result = 0 - reversed_number;
  } else {
    result = reversed_number;
  }
  return result;
}
