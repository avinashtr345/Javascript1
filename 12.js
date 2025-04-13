function simpleEncoder(str) {
    const lowerStr = str.toLowerCase();
  
    return lowerStr
      .split('').map(char => 
        lowerStr.indexOf(char) === lowerStr.lastIndexOf(char) ? '[' : ']'
      )
      .join('');
  }
  
  console.log(simpleEncoder("Mubashir"));    // "[[[[[[[["
  console.log(simpleEncoder("Matt"));        // "[[]]"
  console.log(simpleEncoder("eD  aBiT"));    // "[[]]]]][["
  