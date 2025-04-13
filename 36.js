function mapping(letters) {
    const result = {};
    for (let i = 0; i < letters.length; i++) {
        result[letters[i]] = letters[i].toUpperCase();
    }
    return result;
}
console.log(mapping(["p", "s"]));         // { "p": "P", "s": "S" }
console.log(mapping(["a", "b", "c"])); 