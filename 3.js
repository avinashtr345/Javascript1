function scaleTip(arr) {
    let mid = Math.floor(arr.length / 2);
    
    let leftSum = 0;
    let rightSum = 0;
  
    // Left side sum
    for (let i = 0; i < mid; i++) {
      leftSum += arr[i];
    }
  
    // Right side sum
    for (let i = mid + 1; i < arr.length; i++) {
      rightSum += arr[i];
    }
  
    if (leftSum > rightSum) return "left";

    else if (rightSum > leftSum) return "right";

    else return "balanced";
  }
  
  console.log(scaleTip([0, 0, "I", 1, 2]));
  console.log(scaleTip([0, 0, "I", 1, 1])); 
  console.log(scaleTip([1,2,3, "I", 4,0,0])); 
  console.log(scaleTip([5,5,5,0,"I", 1, 1,10,2])); 


  
