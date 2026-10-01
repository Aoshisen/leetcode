/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	// (X 的最大值)
	const m = matrix[0].length;
	// (Y 的最大值)
	const n = matrix.length;
	function get(x, y) {
		return matrix[y][x]
	}
	//列x的最小值
	let min_col = 0;
	let max_col = n - 1;
	//行
	let min_row = 0;
	let max_row = m - 1;
	const result = [];
	// 0-> 右边 1->下 2->左,3->上
	let flag = 0
	while (result.length < m * n) {
		if (flag === 0) {
			// 从左到右边
			for (let x = min_row; x <= max_row; x++) {
				const current = get(x, min_row)
				console.log("从左到右边:", current)
				result.push(current)
			}
			flag++;
			min_col++;
		}
		else if (flag === 1) {
			// 从上到下
			for (let y = min_col; y <= max_col; y++) {
				const current = get(max_row, y)
				console.log("从上到下", current)
				result.push(current)
			}
			flag++;
			max_row--;
		}
		else if (flag === 2) {
			// 从右到左
			for (let x = max_row; x >= min_row; x--) {
				const current = get(x, max_col);
				console.log("从右到左:", current)
				result.push(current)
			}
			flag++;
			max_col--;
		}
		else {
			// 从下到上
			for (let y = max_col; y >= min_col; y--) {
				const current = get(min_row, y)
				console.log("从下到上:", current)
				result.push(current)
			}
			flag = 0;
			min_row++;
		}
	}
	return result
};

if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest;
	it("case1", () => {
		const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
		const result = [1, 2, 3, 6, 9, 8, 7, 4, 5]
		expect(spiralOrder(matrix)).toStrictEqual(result);
	});

	it("case2", () => {
		const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
		const result = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
		expect(spiralOrder(matrix)).toStrictEqual(result);
	});
}