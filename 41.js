function findNaN(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Number.isNaN(arr[i])) {
            return i;
        }
    }
    return -1;
}
console.log(findNaN([1, 2, NaN])); // 2
console.log(findNaN([NaN, 1, 2, 3, 4])); // 0