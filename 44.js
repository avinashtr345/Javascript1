function hackerSpeak(str) {
    const replacements = {a:4, e:3, i:1, o:0, s:5};
    return str.split('').map(c => replacements[c.toLowerCase()] || c).join('');
}
console.log(hackerSpeak("javascript is cool")); // "j4v45cript 15 c00l"
console.log(hackerSpeak("programming is fun")); // "pr09r4mmlng 15 fun"