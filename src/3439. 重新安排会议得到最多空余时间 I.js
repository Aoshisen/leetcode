/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function (eventTime, k, startTime, endTime) {
	//会议 开始时间和会议结束时间
	const events = startTime.map((start, index) => {
		const end = endTime[index]
		const isLast = index === startTime.length - 1;
		const isBegin = index === 0;
		const duration_end = (isLast ? eventTime : startTime[index + 1]) - end;
		const duration_start = start - (isBegin ? 0 : endTime[index - 1])
		return [start, end, duration_start, duration_end, (duration_start + duration_end) / 2]
	}
	)
	let array = []
	for (let i = k; i < events.length + 1; i++) {
		const current = events.slice(i - k, i)
		array.push(current)
	}
	console.log(array)
	const maxArray = array.sort((a, b) => sum(b) - sum(a))[0]
	console.log(maxArray,"<<<<<<<<<<<<,")
	//起始时间大于
	if (maxArray[0][2] > maxArray.at(-1)[3]) {
		//左移
		return maxArray.reduce((prev, current) => current[3] + prev, maxArray[0][2])
	} else {
		//右移
		return maxArray.reduce((prev, current) => current[2] + prev, maxArray.at(-1)[3])
	}
};
function sum(array) {
	return array.reduce((prev, current) => {
		return prev + current[4]
	}, 0)
}

if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest
	it("case1", () => {
		const eventTime = 5, k = 1, startTime = [1, 3], endTime = [2, 5];
		expect(maxFreeTime(eventTime, k, startTime, endTime)).equal(2)
	})

	it("case2", () => {
		const eventTime = 10, k = 1, startTime = [0, 2, 9], endTime = [1, 4, 10];
		expect(maxFreeTime(eventTime, k, startTime, endTime)).equal(6)
	})

	it("case3", () => {
		const eventTime = 5, k = 2, startTime = [0, 1, 2, 3, 4], endTime = [1, 2, 3, 4, 5]
		expect(maxFreeTime(eventTime, k, startTime, endTime)).equal(0)
	})

	it("case4", () => {
		const eventTime = 34, k = 2, startTime = [0, 17], endTime = [14, 19]
		expect(maxFreeTime(eventTime, k, startTime, endTime)).equal(18)
	})
	it.only("case5", () => {
		const eventTime = 482, k = 2, startTime = [21, 67, 151, 448], endTime = [23, 132, 219, 449]
		expect(maxFreeTime(eventTime, k, startTime, endTime)).equal(292)
	})
}