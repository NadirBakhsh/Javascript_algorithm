function almostIncreasingSequence(sequence) {
  const sortArr = [...sequence].sort()
  const isIncreasingSequence = JSON.stringify(sequence) === JSON.stringify(sortArr)
  return isIncreasingSequence
}

console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3])) 