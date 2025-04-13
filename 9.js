function numObj(arr) {
    return arr.map(num => {
      let key = String(num); 
      let value = String.fromCharCode(num);
      return { [key]: value };
    });
  }
  console.log(numObj([118, 117, 120]));    
  console.log(numObj([101, 121, 110, 113])); 
  console.log(numObj([118, 103, 110])); 
  