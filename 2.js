function digitSum(num){
    var sum=0;
    while(num>0){
        sum=sum+num%10;
        num = Math.floor(num / 10); 
    }
    return sum;
}

function isEqual(arr) {
    return digitSum(arr[0]) === digitSum(arr[1]);
  }

  console.log(isEqual([105, 42])); // true
console.log(isEqual([21, 35]));  // false

