/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let result = [intervals[0]];
  function isCommon(interval, current) {
    const [start, end] = current;
    const [interval_start, interval_end] = interval;
    return interval_start <= end && interval_end >= start;
  }
  function findCommons(intervals, current) {
    const commons = intervals
      .map((interval, index) => {
        if (isCommon(interval, current)) {
          return [interval, index];
        }
        return undefined;
      })
      .filter(Boolean);
    return commons;
  }
  function mergeCommon(common, current) {
    const [start, end] = common;
    const [current_start, current_end] = current;
    return [Math.min(start, current_start), Math.max(end, current_end)];
  }

  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const commons = findCommons(result, current);
    if (commons.length == 0) {
      result.push(current);
    } else {
      let merged = current;
      let needRemovedIndex = commons.map((i) => i[1]);
      for (let i = 0; i < commons.length; i++) {
        const [common] = commons[i];
        merged = mergeCommon(common, merged);
      }
      result = result.filter((_, i) => {
        return !needRemovedIndex.includes(i);
      });

      result.push(merged);
    }
  }

  return result.sort((i, j) => i[0] - j[0]);
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
