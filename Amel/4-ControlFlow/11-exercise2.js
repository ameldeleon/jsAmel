function isLandscape(width, height) {
    return (width > height);
}

console.log(isLandscape(800, 600)); // true
console.log(isLandscape(600, 800)); // false