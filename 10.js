function changeTypes(arr) {
    return arr.map(item => {
      if (typeof item === "number") {
        return item % 2 === 0 ? item + 1 : item;
      } else if (typeof item === "string") {
        return item.charAt(0).toUpperCase() + item.slice(1) + "!";
      } else if (typeof item === "boolean") {
        return !item;
      } else {
        return item;
      }
    });
  }
  console.log(changeTypes(["a", 12, true])); 
  console.log(changeTypes([13, "13", "12", "twelve"])); 
  console.log(changeTypes([false, "false", "true"]));   