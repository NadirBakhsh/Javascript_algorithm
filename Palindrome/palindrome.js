// console.log('palindrome')
//=========================

function palindromeByJsMethod(word = '') {
    const reverseWord = word.toLowerCase().split().reverse().join()
    return word === reverseWord ? true : false
}
// console.log('palindrome for civic', palindromeByJsMethod('civic') ? 'isPalindrome' : 'Is not a Palindrome')

function palicdromeByForLoop(word = '') {
    const reverseWord = []
    for (let i = 0; i < word.length; i++) {
        reverseWord.push(word[i !== 0 ? (word.length - i) - 1 : word.length - 1])
    }
    return reverseWord.join("") === word? true : false
}
// console.log('palindrome for Madam', palicdromeByForLoop('Madam') ? 'isPalindrome' : 'This word is not Palindrome')