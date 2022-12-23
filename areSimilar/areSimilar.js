function areSimilar(a, b) {
	const sum = (acc, currentValue) => acc + currentValue
	const isA = a.reduce(sum)
	const isB = b.reduce(sum)
	return isA === isB
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]))
console.log(areSimilar([1, 2, 3], [2, 1, 3]))
console.log(areSimilar([1, 2, 2], [2, 1, 1]))
