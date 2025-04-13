function pyramidArrays(n) {
    let result = [];
  
    for (let i = 1; i <= n; i++) {
      let level = [];
      for (let j = 0; j < i; j++) {
        level.push(i);
      }
      result.push(level);
    }
  
    return result;
  }
  

  console.log(pyramidArrays(1)); 
// Output: [[1]]

console.log(pyramidArrays(3)); 
// Output: [[1], [2, 2], [3, 3, 3]]

console.log(pyramidArrays(5)); 
// Output: [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]
