function subset(arrA, arrB) {
    const setA = new Set(arrA);
    const setB = new Set(arrB);
    for (const elem of setA) {
        if (!setB.has(elem)) {
            return false;
        }
    }
    return true;
}
console.log(subset([1, 3], [1, 3, 3, 5])); // true
console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8])); // true
console.log(subset([1, 3], [1, 33])); // false
console.log(subset([1, 3, 10], [10, 8, 8, 8])); // false