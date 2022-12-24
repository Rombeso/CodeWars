function rgb(r, g, b){
    function toHex(number) {
        if (number < 0) {
            number = 0
        }
        if (number > 255) {
            number = 255
        }
        const hex = number.toString(16);
        return hex.length === 1 ? `0${hex}` : hex;
    }
return [toHex(r), toHex(g), toHex(b)].join('').toUpperCase()
}

console.log(rgb(255, 255, 255))// returns FFFFFF
console.log(rgb(300, 255, 255)) // returns FFFFFF
console.log(rgb(0,0,0)) // returns 000000
console.log(rgb(148, 0, 211)) // returns 9400D3