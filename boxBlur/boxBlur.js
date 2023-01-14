function boxBlur(image) {
	let matrix = []
	let index = 0
	while (index < image.length) {
		matrix.push(...image[index])
		index++
	}

    let answer = 0;

    for (let index = 0; index < matrix.length; index++) {
        answer = answer + matrix[index]
        
    }

    return [[Math.floor(answer / 9)]]
}

console.log(
	boxBlur([
		[1, 1, 1,2,2],
		[1, 7, 1, 2,2],
		[1, 1, 1,1,2,2],
	])
)
