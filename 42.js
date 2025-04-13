function sumTwoSmallestNums(nums) {
    let min1 = Infinity, min2 = Infinity;
    
    for (const num of nums) {
        if (num > 0) {
            if (num < min1) {
                min2 = min1;
                min1 = num;
            } else if (num < min2) {
                min2 = num;
            }
        }
    }
    
    return min1 + min2;
}
console.log(sumTwoSmallestNums([19, 5, 42, 2, 77])); // 7
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])); // 3453455