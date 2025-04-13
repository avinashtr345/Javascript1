function reverseArr(num) {
    const result = [];
    while (num > 0) {
        result.push(num % 10);
        num = Math.floor(num / 10);
    }
    return result;
}
console.log(reverseArr(1485979)); // [9, 7, 9, 5, 8, 4, 1]
console.log(reverseArr(623478));  // [8, 7, 4, 3, 2, 6]