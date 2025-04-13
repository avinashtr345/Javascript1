function convertToNumber(obj) {
    let result = {};
    let keys = Object.keys(obj); // saari keys nikaal lo
    
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      result[key] = Number(obj[key]);
    }
  
    return result;
  }
  
  // Example usage:
  console.log(convertToNumber({ piano: "200" }));
  console.log(convertToNumber({ piano: "200", tv: "300" }));
  console.log(convertToNumber({ piano: "200", tv: "300", stereo: "400" }));
  