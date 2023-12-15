function convert(s, numRows) {
  //建立一个长度为numRows 的二维数组
  let result = "";
  let zArray = createZArray(s, numRows);
  zArray.map((item) => {
    item.map((char) => {
      if (char !== null) {
        result += char;
      }
    });
  });
  return result;
}
function createZArray(s, numRows) {
  let zArray = initZArray(s, numRows);
  for (let index = 0; index < s.length; index++) {
    const char = s[index];
    const [X, Y] = calcXY(index, numRows);
    zArray[Y][X] = char;
  }
  return zArray;
}

function calcXY(location, numRows) {
  const X = calcX(location, numRows);
  const Y = calcY(location, numRows);
  return [X, Y];
}
function calcY(location, numRows) {
  let Y = 0;
  const locationWithoutZero = location + 1;
  const singleBundleCover = getBundleCover(numRows);
  const remain = locationWithoutZero % singleBundleCover;
  if (remain === 0) {
    Y = numRows === 1 ? 0 : 1;
  } else {
    // console.log("没有被整除");
    if (remain < numRows) {
      //如果剩下的数量没有超过numRows 那么当前的location 必填充在每次分隔的第一列,就是填充满的那一列,所以其纵坐标为remain-1
      // console.log("剩下的个数<每列的容量");
      Y = Math.max(remain - 1, 0);
    } else if (remain === numRows) {
      // console.log("剩下的个数=每列的容量");
      Y = Math.max(numRows - 1, 0);
    } else {
      // 如果剩下的数量超过了numRows 那么超过的值为remain-remain
      console.log("剩下的个数>每列的容量");
      const over = remain - numRows;
      Y = Math.max(numRows - 1 - over, 0);
    }
  }
  return Y;
}
function calcX(location, numRows) {
  let X = 0;
  X = getRowLength(location + 1, numRows) - 1;
  return X;
}
function initZArray(s, numRows) {
  const colLength = getRowLength(s.length, numRows);
  const singleRow = Array.from({ length: colLength }).fill(null);
  let zArray = Array.from({ length: numRows }).map(() => [...singleRow]);
  return zArray;
}

function getRowLength(length, numRows) {
  const singleBundleCover = getBundleCover(numRows);
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
  // console.log(bundleNum, biggerColumLength, moreColumnLength, result);
  return result;
}
function getBundleCover(numRows) {
  return Math.max(2 * numRows - 2, 1);
}
function getSingleBundleColumnLength(numRows) {
  return Math.max(numRows - 1, 1);
}

const case1 = ["PAYPALISHIRING", 3];
const case2 = ["PAYPALISHIRING", 4];
const case3 = ["A", 1];

console.log(convert(case1[0], case1[1]));
console.log(convert(case2[0], case2[1]));
console.log(convert(case3[0], case3[1]));
