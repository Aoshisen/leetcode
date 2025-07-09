export function maxValue(events, k) {
	return findMax(getCombinations(events), k)
};

function getCombinations(arr) {
	const result = [];

	function backtrack(start, current) {
		if (current.length) {
			result.push([...current]);
		}

		for (let i = start; i < arr.length; i++) {
			const now = arr[i]
			if (isOk(current, now)) {
				current.push(now);
				backtrack(i + 1, current);
				current.pop();
			}
		}
	}

	backtrack(0, []);
	return result;
}

function getCombinationWithLength(arr, k) {
	const result = [];

	function backtrack(start, current) {
		if (current.length === k) {
			result.push([...current]);
		}

		for (let i = start; i < arr.length; i++) {
			const now = arr[i]
			current.push(now);
			backtrack(i + 1, current);
			current.pop();
		}
	}

	backtrack(0, []);
	return result;
}


function findMax(eventsArray, k) {
	const result = eventsArray.map((item) => _max(item, k))
	return Math.max(...result)
}
function _max(item, k) {
	const items = getCombinationWithLength(item, k);
	const test = items.map((item) => {
		return item.reduce((prev, current) => {
			return current[2] + prev
		}, 0)
	})
	return Math.max(...test)
}
function isOk(eventsArray, event) {
	//每个都不冲突那才是不冲突
	return eventsArray.every(item => ok(item, event))
}
function ok(event1, event2) {
	const [a1, b1, c1] = event1;
	const [a2, b2, c2] = event2;
	return a2 >= b1 || b2 <= a1;
}

if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest
	it('case1', () => {
		const events = [[1, 2, 4], [3, 4, 3], [2, 3, 1]];
		const k = 2
		expect(maxValue(events, k)).equal(7)
	})

	it('case2', () => {
		const events = [[1, 2, 4], [3, 4, 3], [2, 3, 10]];
		const k = 2
		expect(maxValue(events, k)).equal(14)
	})

	it('case3', () => {
		const events = [[1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4]];
		const k = 3
		expect(maxValue(events, k)).equal(9)
	})
}