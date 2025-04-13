function capMe(names) {
    return names.map(name => 
        name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    );
}
console.log(capMe(["mavis", "senaida", "letty"])); 
console.log(capMe(["samuel", "MABELLE", "lettita", "meridith"])); 