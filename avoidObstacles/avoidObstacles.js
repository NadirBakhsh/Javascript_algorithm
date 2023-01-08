function avoidObstacles(inputArray) {
    let jumpLength = 1; // start with the minimum jump length

    while (true) {
      // check if jumpLength is enough to avoid all obstacles
      if (inputArray.every(obstacle => obstacle % jumpLength !== 0)) {
        return jumpLength; // jumpLength is found
      }
  
      jumpLength++; // increase jumpLength and try again
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));