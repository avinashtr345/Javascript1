function numOfSubbarrays(arr) {
    let count = 0;
    for (const item of arr) {
        if (Array.isArray(item)) count++;
    }
    return count;
}
console.log(numOfSubbarrays([[1, 2, 3]])); // 1
console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]])); // 3