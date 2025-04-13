function superheroes(names) {
    let result = [];
  
    for (let i = 0; i < names.length; i++) {
      let name = names[i];
      if (name.endsWith("man") && !name.toLowerCase().endsWith("woman")) {
        result.push(name);
      }
    }
  
    return result.sort(); // alphabetical order
  }
  console.log(superheroes(["Batman", "Superman", "Spider-man", "Hulk", "Wolverine", "Wonder-Woman"]));
// ➞ ["Batman", "Spider-man", "Superman"]

console.log(superheroes(["Catwoman", "Deadpool", "Dr.Strange", "Captain-America", "Aquaman"]));
// ➞ ["Aquaman"]

console.log(superheroes(["Wonder-Woman", "Catwoman", "Invisible-Woman"]));
// ➞ []
