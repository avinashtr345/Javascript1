function filterUnique(arr) {
    return arr.filter(str => {
      const charSet = new Set(str);
      return charSet.size === str.length;
    });
  }
  
  console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"])); 
  // ["abc"]
  
  console.log(filterUnique(["88", "999", "989", "9988", "9898"])); 
  // []
  
  console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"])); 
  // ["ABCDE", "BED", "BAC"]
    