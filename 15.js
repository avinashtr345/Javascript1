function flattenCurve(arr) {
    if (arr.length === 0) {
        return [];
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    const mean = sum / arr.length;
    const roundedMean = Math.round(mean * 10) / 10;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = roundedMean;
    }
    return arr;
}
console.log(flattenCurve([1, 2, 3, 4, 5]));     
console.log(flattenCurve([0, 0, 0, 2, 7, 3])); 
console.log(flattenCurve([4]));                  
console.log(flattenCurve([]));                   
