function uniqueArr(arr) {
    const positiveNumbers = arr.filter(num => num > 0);
    const uniqueNumbers = [];
    
    for (const num of positiveNumbers) {
        if (!uniqueNumbers.includes(num)) {
            uniqueNumbers.push(num);
        }
    }
    
    return uniqueNumbers;
}
console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1])); // [1, 3]
console.log(uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]));  // [3, 5]
console.log(uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5])); 