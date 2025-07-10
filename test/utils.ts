import { expect } from "vitest";
export function registerMatchers() {
	expect.extend({
		toEqualUnordered(received, expected) {
			const sortArrays = arr =>
				arr.map(sub => [...sub].sort()).sort();

			const pass =
				this.equals(sortArrays(received), sortArrays(expected));

			return {
				pass,
				message: () =>
					`Expected arrays to be equal regardless of order\n` +
					`Received: ${JSON.stringify(received)}\n` +
					`Expected: ${JSON.stringify(expected)}`
			};
		}
	});
}