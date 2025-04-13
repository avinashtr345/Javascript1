function nextInLine(arr, num) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "No array has been selected";
    }
    arr.push(num);
    arr.shift();
    return arr;
}
console.log(nextInLine([5, 6, 7, 8, 9], 1)); // [6, 7, 8, 9, 1]
console.log(nextInLine([7, 6, 3, 23, 17], 10)); // [6, 3, 23, 17, 10]
console.log(nextInLine([1, 10, 20, 42], 6)); // [10, 20, 42, 6]
