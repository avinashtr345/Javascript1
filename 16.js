function moveToEnd(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        while (left < right && arr[left] !== target) {
            left++;
        }
        while (left < right && arr[right] === target) {
            right--;
        }
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    return arr;
}
console.log(moveToEnd([1, 3, 2, 4, 4, 1], 1));
console.log(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9));
