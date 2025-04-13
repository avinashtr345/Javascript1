function longestWord(sen){
    const words=sen.split(" ")
    let long=""
    for(let word of words){
        if(word.length>long.length ){
            long=word;
        }
    }
    return long
}

console.log(longestWord("Hello darkness my old friend")); // "darkness"
console.log(longestWord("Hello there mate"));             // "Hello"
console.log(longestWord("Kayla's toy is plastic"));       // "Kayla's"