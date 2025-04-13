function isPrime(n) {
    if (n <= 1) return false; // 1 ya usse chhote number prime nahi hote
  
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
  
    return true;
  }
  
  function allPrime(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (!isPrime(arr[i])) {
        return false;
      }
    }
    return true;
  }
  

console.log(allPrime([1,2,3,4]))
console.log(allPrime([7, 5, 2, 4, 6]));            // false (4 and 6 not prime)
console.log(allPrime([2, 3, 5, 7, 13, 17, 19]));    // true
console.log(allPrime([1, 5, 3]));                  // false (1 not prime)
