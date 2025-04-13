function countPosSumNeg(arr) {
    if (arr.length === 0) return [];
  
    let posCount = 0;
    let negSum = 0;
  
    for (let num of arr) {
      if (num > 0) {
        posCount++;
      } else if (num < 0) {
        negSum += num;
      }
    }
  
    return [posCount, negSum];
  }
  console.log(countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); // [10, -65]
  console.log(countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34])); // [7, -252]
  console.log(countPosSumNeg([91, -4, 80, -73, -28])); // [2, -105]
  console.log(countPosSumNeg([])); // []
    