function reverseImage(matrix) {
    return matrix.map(row => row.map(pixel => pixel === 0 ? 1 : 0));
  }
  console.log(reverseImage([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ]));  