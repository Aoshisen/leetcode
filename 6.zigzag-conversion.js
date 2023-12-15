function convert(s, numRows) {
  //建立一个长度为numRows 的二维数组
  let zArray = createZArray(s, numRows);
  return zArray;
}
function createZArray(s, numRows) {
  let zArray = initZArray(s, numRows);
  let currentCol = 0;
  let currentRow = 0;
  return zArray;
}

function calcXY(location, numRows) {
  let X, Y;
  const singleBundleCover = getSingleBundleCover(numRows);
  const remain = (location + 1) % singleBundleCover;
  if (remain > numRows) {
    Y = remain - 1;
  } else {
    Y = numRows -remain-2;
  }
  return [X, Y];
}
function initZArray(s, numRows) {
  const colLength = getMatrixColumLength(s.length, numRows);
  const singleArray = new Array(colLength).fill(null);
  let zArray = new Array(numRows).fill(singleArray);
  return zArray;
}

function getMatrixColumLength(length, numRows) {
  const singleBundleCover = getSingleBundleCover(numRows);
  const singleBundleColumnLength = getSingleBundleColumnLength(numRows);
  //得到需要多少个bundle才能容纳下当前的length
  const bundleNum = Math.ceil(length / singleBundleCover);
  //得到偏大的columLength;
  const biggerColumLength = bundleNum * singleBundleColumnLength;
  //得到多余的列
  const moreColumnLength = Math.min(
    bundleNum * singleBundleCover - length,
    singleBundleColumnLength - 1
  );
  const result = Math.max(biggerColumLength - moreColumnLength, 1);
  console.log(bundleNum, biggerColumLength, moreColumnLength, result);
  return result;
}
function getSingleBundleCover(numRows) {
  return Math.max(2 * numRows - 2, 1);
}
function getSingleBundleColumnLength(numRows) {
  return Math.max(numRows - 1, 1);
}
console.log(calcXY(5, 3));

const result = convert("12345", 2);
