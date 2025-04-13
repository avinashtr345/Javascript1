function peelLayerOff(arr) {
    if (arr.length <= 2 || arr[0].length <= 2) {
        return [];
    }
    const result = [];
    for (let i = 1; i < arr.length - 1; i++) {
        const row = arr[i];
        result.push(row.slice(1, -1));
    }
    return result;
}
console.log(peelLayerOff([["a", "b", "c", "d"], ["e", "f", "g", "h"], ["i", "j", "k", "l"], ["m", "n", "o", "p"]]));

console.log(peelLayerOff([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));


