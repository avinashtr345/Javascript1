function isScalable(mountain) {
    for (let i = 0; i < mountain.length - 1; i++) {
        if (Math.abs(mountain[i] - mountain[i + 1]) > 5) {
            return false;
        }
    }
    return true;
}