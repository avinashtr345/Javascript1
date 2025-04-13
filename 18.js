function simonSays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    for (let i = 0; i < arr1.length - 1; i++) {
        if (arr1[i] !== arr2[i + 1]) {
            return false;
        }
    }
    
    return true;
}
console.log(simonSays([1, 2], [5, 1])); // true
console.log(simonSays([1, 2], [5, 5])); // false
