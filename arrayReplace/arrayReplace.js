function arrayReplace(inputArray, elemToReplace, substitutionElem) {
	let updatedArray = []
	for (const iterator of inputArray) {
		if (iterator === elemToReplace) {
			updatedArray.push(substitutionElem)
		} else {
			updatedArray.push(iterator)
		}
	}
	return updatedArray
}

console.log(arrayReplace([1, 2, 1], 1, 3))
