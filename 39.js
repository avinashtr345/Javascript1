function warOfNumbers(numbers) {
    let evenSum = 0;
    let oddSum = 0;
    
    for (const num of numbers) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    
    return Math.abs(evenSum - oddSum);
}
console.log(warOfNumbers([2, 8, 7, 5])); // 2
console.log(warOfNumbers([12, 90, 75])); // 27