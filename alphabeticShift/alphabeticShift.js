const letter = 'abcdefghijklmnopqrstvwxyz'
const letterInArray = letter.split('')

const letterIndex = (letter) => {
  if (letter !== 'z') {
    return letterInArray[letterInArray.indexOf(letter) + 1]
  }
  return letterInArray[0]
}

function alphabeticShift(inputString) {
  return inputString.toLowerCase().split('').map(letterIndex).join('')
}

console.log(alphabeticShift('crazy'))
