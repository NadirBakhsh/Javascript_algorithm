function alternatingSums(a) {
	// checks whether an element is even
	const even = (element) => element % 2 === 0

	// get Array Sum
	const sum = (accumulator, currentValue) => accumulator + currentValue

	const evenSum = []
	const oddSum = []

	for (const index in a) {
		even(index) ? evenSum.push(a[index]) : oddSum.push(a[index])
	}

	return [evenSum.reduce(sum), oddSum.reduce(sum)]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))
