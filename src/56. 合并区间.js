/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (_intervals) {
  const intervals = _intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]];
  function isCommon(interval, current) {
    return interval[0] <= current[1] && interval[1] >= current[0];
  }

  function findCommons(intervals, current) {
    const result = [];
    intervals.forEach((interval, index) => {
      if (isCommon(interval, current)) {
        return result.push([interval, index]);
      }
    });
    return result;
  }

  function mergeCommon(common, current) {
    return [Math.min(common[0], current[0]), Math.max(common[1], current[1])];
  }

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const commons = findCommons(result, current);
    if (commons.length == 0) {
      result.push(current);
    } else {
      let merged = current;
      let needRemovedIndex = [];
      for (let i = 0; i < commons.length; i++) {
        const [common, index] = commons[i];
        needRemovedIndex.push(index);
        merged = mergeCommon(common, merged);
      }
      result = result.filter((_, i) => {
        return !needRemovedIndex.includes(i);
      });

      result.push(merged);
    }
  }

  return result;
};

if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("case1", () => {
    const intervals = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    const result = [
      [1, 6],
      [8, 10],
      [15, 18],
    ];
    expect(merge(intervals)).toStrictEqual(result);
  });

  it("case2", () => {
    const intervals = [
      [1, 4],
      [4, 5],
    ];
    const result = [[1, 5]];
    expect(merge(intervals)).toStrictEqual(result);
  });

  it("case3", () => {
    const intervals = [
      [4, 7],
      [1, 4],
    ];
    const result = [[1, 7]];
    expect(merge(intervals)).toStrictEqual(result);
  });

  it("case4", () => {
    const intervals = [
      [2, 3],
      [4, 5],
      [6, 7],
      [8, 9],
      [1, 10],
    ];
    const result = [[1, 10]];
    expect(merge(intervals)).toStrictEqual(result);
  });

  it("case5", () => {
    const intervals = [
      [2, 3],
      [5, 5],
      [2, 2],
      [3, 4],
      [3, 4],
    ];
    const result = [
      [2, 4],
      [5, 5],
    ];
    expect(merge(intervals)).toStrictEqual(result);
  });
}
