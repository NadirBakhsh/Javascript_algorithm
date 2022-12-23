function alphabetSubsequence(s) {
	let isSubsequence = true

	for (let index = 0; index < s.length; index++) {
		if (s.charCodeAt(index) <= s.charCodeAt(index - 1)) isSubsequence = false
	}

	return isSubsequence
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
