function sumFoundIndexes(arr, target) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        sum += i;
      }
    }
    return sum;
  }
  
  console.log(sumFoundIndexes([0, 3, 3, 0, 0, 3], 3)); 
  console.log(sumFoundIndexes([1, 2, 3, 4, 5, 6], 3)); 
  console.log(sumFoundIndexes([100, 100, 100, 100, 100], 100));  
  console.log(sumFoundIndexes([5, 10, 15, 20], 2));  
  