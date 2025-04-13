function square(n) {
    if (n === 0) return [];
    let result = [];
    for (let i = 0; i < n; i++) {
      let row = new Array(n).fill(n); 
      result.push(row);
    } 
    return result;
  }
  console.log(square(3));
  console.log(square(1)); 
  console.log(square(0)); 
  