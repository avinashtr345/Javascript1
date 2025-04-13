function evenOddTransform(arr, n) {
    const result = [...arr];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < result.length; j++) {
            result[j] += (result[j] % 2 === 0 ? -2 : 2);
        }
    }
    return result;
}
console.log(evenOddTransform([3, 4, 9], 3));    // [9, -2, 15]
console.log(evenOddTransform([0, 0, 0], 10));    // [-20, -20, -20]