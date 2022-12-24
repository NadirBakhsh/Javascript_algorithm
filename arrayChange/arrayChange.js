function arrayChange(inputArray){
    let moves = 0;
    const series = inputArray;
    for (let i = 1; i < series.length; i += 1) {
      if (series[i] <= series[i - 1]) {
        const diff = (series[i - 1] - series[i]) + 1;
        series[i] += diff;
        moves += diff;
      }
    }
    return moves;
}

console.log(arrayChange([1,1,1]));