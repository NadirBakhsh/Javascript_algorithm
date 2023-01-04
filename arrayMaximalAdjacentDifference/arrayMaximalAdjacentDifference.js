function arrayMaximalAdjacentDifference(inputArray) {
    var dif = 0;
    var max = 0;
    for(var i = 0; i < inputArray.length; i++){
        dif = Math.abs(inputArray[i] - inputArray[i+1]);
        if(dif > max){
            max = dif;
        }
    }
    return max;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));