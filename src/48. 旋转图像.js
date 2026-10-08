/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
	const mapping = new Map();
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			let x = j;
			let y = i;
			mapping.set(`${x}-${y}`, matrix[y][x])
		}
	}
	const n = matrix.length
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			let x = j;
			let y = i;
			// 00 ->02, 01 -> 12; 02 -> 22
			matrix[y][x] = mapping.get(`${y}-${n - 1 - x}`)
		}
	}
	// console.log(matrix)
	return matrix
};

if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest;
	it("case1", () => {
		const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
		const result = [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
		expect(rotate(matrix)).toStrictEqual(result);
	});

	it("case1", () => {
		const matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
		const result = [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]
		expect(rotate(matrix)).toStrictEqual(result);
	});
}