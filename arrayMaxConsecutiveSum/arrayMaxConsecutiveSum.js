function arrayMaxConsecutiveSum(inputArray, k) {
	for (let index = 0; index < inputArray.length; index++) {
		const elementCurrentIndex = inputArray[index]
		const elementNextIndex = inputArray[index + 1]
		if (!elementNextIndex) {
			return elementCurrentIndex + k
		}
	}
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2))
