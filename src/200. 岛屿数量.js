/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	function nebo(x, y) {
		return [
			//上
			[x, y - 1],
			//右
			[x + 1, y],
			//下
			[x, y + 1],
			//左边
			[x - 1, y],
		]
	}
	// function getNebo(x, y) {
	// 	return nebo(x, y).map(ne => getMatrix(ne[0], ne[1]))
	// }
	function getMatrix(x, y) {
		return grid[y]?.[x] || null;
	}
	function validate(v) {
		return v === "1";
	}

	//这是所有岛屿的集合 存储 类似1-2 这样的岛屿座标 [["1-2","1-3"]]
	const lands = [];
	//这是所有岛屿的map,类似 "1-2":1 这样的岛屿座标，表示他在哪个岛屿中
	const lands_index_map = new Map();
	for (let y = 0; y < grid.length; y++) {
		for (let x = 0; x < grid[y].length; x++) {
			const current = getMatrix(x, y);
			if (validate(current)) {
				const nebos = nebo(x, y);
				const validated_nebos = nebos.filter(nebo => validate(getMatrix(...nebo)));
				if (validated_nebos.length === 0) {
					const current_string = [x, y].join("-")
					lands.push([current_string])
					lands_index_map.set(current_string, lands.length)
				} else {
					//从当前位置开始 找到所有的岛屿 
					const land = [];
					const temp = [[x, y]];
					while (temp.length > 0) {
						const [current_x, current_y] = temp.pop();
						nebo(current_x, current_y).forEach(([nebo_x, nebo_y]) => {
							const nebo_string = [nebo_x, nebo_y].join("-")
							if (validate(getMatrix(nebo_x, nebo_y)) && !lands_index_map.has(nebo_string)) {
								land.push(nebo_string)
								temp.push([nebo_x, nebo_y])
								lands_index_map.set(nebo_string, lands.length)
							}
						})

					}
					if (land.length > 0) {
						lands.push(land)
					}
				}
			}
		}
	}
	// console.log(lands, "<<<<<<<<<<<<")
	return lands.length
};
if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest

	it("case1", () => {
		const grid = [
			['1', '1', '1', '1', '0'],
			['1', '1', '0', '1', '0'],
			['1', '1', '0', '0', '0'],
			['0', '0', '0', '0', '0']
		]
		expect(numIslands(grid)).toEqual(1)
	})

	it("case1", () => {
		const grid = [
			['1', '1', '0', '0', '0'],
			['1', '1', '0', '0', '0'],
			['0', '0', '1', '0', '0'],
			['0', '0', '0', '1', '1']
		]
		expect(numIslands(grid)).toEqual(3)
	})


	it("case3", () => {
		const grid = [
			["1", "1", "1"],
			["0", "1", "0"],
			["1", "1", "1"]]
		expect(numIslands(grid)).toEqual(1)
	})
	// [["1","0","1","1","1"],["1","0","1","0","1"],["1","1","1","0","1"]]

	it("case3", () => {
		const grid = [
			["1", "0", "1", "1", "1"],
			["1", "0", "1", "0", "1"],
			["1", "1", "1", "0", "1"]]
		expect(numIslands(grid)).toEqual(1)
	})
}