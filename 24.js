function evenLast(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i += 2) {
        sum += arr[i];
    }
    return sum * arr[arr.length - 1];
}
console.log(evenLast([])); // 0
console.log(evenLast([1, 3, 3, 1, 10]));
console.log(evenLast([-11, 3, 3, 1, 10])); 
console.log(evenLast([2, 3, 4, 5])); 
