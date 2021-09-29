function allLongestStrings(inputArray) {
  const ans = inputArray.filter((item) => {
    if (item.length === Math.max(...inputArray.map((el) => el.length))) {
      return item;
    }
  });

  return ans;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba", "sdfD"]));
