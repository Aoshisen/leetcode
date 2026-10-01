/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var setZeroes = function (matrix) {
// 	const resetX = []
// 	const resetY = []
// 	function resetByX(_x) {
// 		for (let y = 0; y < matrix.length; y++) {
// 			for (let x = 0; x < matrix[y].length; x++) {
// 				if (_x === x) {
// 					matrix[y][x] = 0
// 				}
// 			}
// 		}

// 	}
// 	function resetByY(_y) {
// 		for (let y = 0; y < matrix.length; y++) {
// 			for (let x = 0; x < matrix[y].length; x++) {
// 				if (_y === y) {
// 					matrix[y][x] = 0
// 				}
// 			}
// 		}
// 	}
// 	for (let y = 0; y < matrix.length; y++) {
// 		for (let x = 0; x < matrix[y].length; x++) {
// 			if (matrix[y][x] === 0) {
// 				resetX.push(x)
// 				resetY.push(y)
// 			}
// 		}
// 	}
// 	if (resetX.length === 0) {
// 		console.log("reset")
// 		return matrix;
// 	}
// 	for (let i = 0; i < resetX.length; i++) {
// 		resetByX(resetX[i])
// 	}
// 	for (let i = 0; i < resetY.length; i++) {
// 		resetByY(resetY[i])
// 	}
// 	// console.log(resetX, resetY, matrix, '<<<<<<<<<')
// 	return matrix;
// };
var setZeroes = function (matrix) {
	const rows = new Set();
	const cols = new Set();

	for (let y = 0; y < matrix.length; y++) {
		for (let x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] === 0) {
				rows.add(y);
				cols.add(x);
			}
		}
	}

	for (let y = 0; y < matrix.length; y++) {
		for (let x = 0; x < matrix[y].length; x++) {
			if (rows.has(y) || cols.has(x)) {
				matrix[y][x] = 0;
			}
		}
	}

	return matrix;
};
if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest

	it("case1", () => {
		const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
		const result = [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
		expect(setZeroes(matrix)).toStrictEqual(result)
	})
	it("case2", () => {
		const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
		const result = [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]
		expect(setZeroes(matrix)).toStrictEqual(result)
	})
	it.only("case3", () => {
		const matrix = [[-1, 2147483647, 3], [4, -2147483648, 6], [42, 6969, 8]]
		const result = [[-1, 2147483647, 3], [4, -2147483648, 6], [42, 6969, 8]]
		expect(setZeroes(matrix)).toStrictEqual(result)
	})

}