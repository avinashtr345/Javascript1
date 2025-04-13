function removeSpecialCharacters(str) {
    return str.replace(/[^\w\s-]/g, '');
}
console.log(removeSpecialCharacters("The quick brown fox!"));  
console.log(removeSpecialCharacters("%fd76$fd(-)66wK10.")); 