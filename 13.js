function print(arr) {
    for (let num of arr) {
      if (!arr.includes(-num)) {
        return num;
      }
    }
  }
  
console.log(print([1, -1, 2, -2, 3]));          // 3
console.log(print([-3, 1, 2, 3, -1, -4, -2]));   // -4
console.log(print([-9, -105, -9, -9, -9, 105])); // -9
