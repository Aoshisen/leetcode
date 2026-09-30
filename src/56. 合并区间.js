/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (_intervals) {
  if (_intervals.length === 0) return [];
  const intervals = _intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastResult = result[result.length - 1];
    if (current[0] <= lastResult[1]) {
      lastResult[1] = Math.max(lastResult[1], current[1])
    } else {
      result.push(current)
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
