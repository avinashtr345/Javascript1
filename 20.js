function incrementToTop(arr) {
    if (arr.length === 0) return 0;
    
    let max = arr[0];
    let totalSteps = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            totalSteps += (arr[i] - max) * i;
            max = arr[i];
        } else {
            totalSteps += max - arr[i];
        }
    }
    
    return totalSteps;
}

console.log(incrementToTop([3, 4, 5])); // 3
console.log(incrementToTop([4, 3, 4])); // 1
console.log(incrementToTop([3, 3, 3])); // 0
