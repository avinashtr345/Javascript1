function identicalFilter(arr) {
    return arr.filter(str => new Set(str).size === 1);
}
// Basic test cases
console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]));
console.log(identicalFilter(["88", "999", "22", "545", "133"]));
console.log(identicalFilter(["xxxx0", "ox0", "xox", "00xx00", "ox0"]));