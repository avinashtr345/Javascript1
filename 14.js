function puzzlePieces(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    if (arr1.length === 0) {
        return false; 
    }
    const sum = arr1[0] + arr2[0];
    for (let i = 1; i < arr1.length; i++) {
        if (arr1[i] + arr2[i] !== sum) {
            return false;
        }
    }
    return true;
}
console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1])); // true
console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6])); // true
console.log(puzzlePieces([1, 2], [-1, -1])); // false
console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10])); // false