function measureDepth(arr) {
    let depth = 0;
    while (Array.isArray(arr)) {
      depth++;
      arr = arr[0];
    }
    return depth;
  }
  
  console.log(measureDepth([])); // 1
  console.log(measureDepth([[]])); // 2
  console.log(measureDepth([[[]]])); // 3
  console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]])); // 11
    