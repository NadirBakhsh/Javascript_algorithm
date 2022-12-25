function arrayConversion(inputArray) {
	let tmp = []
	let j = 0

	while (inputArray.length > 1) {
		tmp = []
		for (let index = 0; index < inputArray.length; index += 2) {
			tmp.push(inputArray.slice(index, index + 2))
		}

		inputArray = tmp.map((pair) => (j ? pair[0] * pair[1] : pair[0] + pair[1]))
		j = (j + 1) % 2
	}
	return inputArray[0]
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]))
