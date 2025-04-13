function backToHome(directions) {
    let ns = 0;
    let ew = 0;
    for (const dir of directions) {
        switch (dir) {
            case 'N':
                ns++;
                break;
            case 'S':
                ns--;
                break;
            case 'E':
                ew++;
                break;
            case 'W':
                ew--;
                break;
        }
    }
    return ns === 0 && ew === 0;
}
// Provided examples
console.log(backToHome("EEWE"));      // false (E+E+W+E → net E:2, W:1 → E:1, S:0 → not back)
console.log(backToHome("NENESSWW"));  // true (N+E+N+E+S+S+W+W → N:0, E:0 → back)
console.log(backToHome("NEESSW"));    // false (N+E+E+S+S+W → N:0, E:1 → not back)