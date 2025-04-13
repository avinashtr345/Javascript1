function sumOfEvens(matrix) {
    let sum = 0;
  
    for (let row of matrix) {
      for (let num of row) {
        if (num % 2 === 0) {
          sum += num;
        }
      }
    }
  
    return sum;
  }
  console.log(sumOfEvens([
    [1, 0, 2],
    [5, 5, 7],
    [9, 4, 3]
  ])); // 6
  
  console.log(sumOfEvens([
    [1, 1],
    [1, 1]
  ])); // 0
  
  console.log(sumOfEvens([
    [42, 9],
    [16, 8]
  ])); // 66
  
  console.log(sumOfEvens([
    [],
    [],
    []
  ])); // 0
    