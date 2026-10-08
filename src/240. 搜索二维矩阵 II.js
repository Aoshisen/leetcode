var searchMatrix = function (matrix, target) {
	if (!matrix.length || !matrix[0].length) return false;
	let r = 0, c = matrix[0].length - 1;
	while (r < matrix.length && c >= 0) {
		const v = matrix[r][c];
		if (v === target) return true;
		if (v > target) c--;
		else r++;
	}
	return false;
};
if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest

	it("case1", () => {
		const matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 5
		expect(searchMatrix(matrix, target)).toEqual(true)
	})

	it("case2", () => {
		const matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 20
		expect(searchMatrix(matrix, target)).toEqual(false)
	})
}