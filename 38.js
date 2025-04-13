function zipIt(women, men) {
    if (women.length !== men.length) return "sizes don't match";
    
    const pairs = [];
    for (let i = 0; i < women.length; i++) {
        pairs.push([women[i], men[i]]);
    }
    return pairs;
}
console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]));
console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]));