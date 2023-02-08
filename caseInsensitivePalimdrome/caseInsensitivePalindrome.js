function isCaseInsensitivePalindrome(inputString) {
    let lowercaseString = inputString.toLowerCase();
    let reversedString = lowercaseString.split('').reverse().join('');
    return lowercaseString === reversedString;
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
