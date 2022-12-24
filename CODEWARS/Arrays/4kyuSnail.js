// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
//
//     NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

const snail = function(array) {
    let exitArray = [];
    while (array.length) {
        exitArray.push(...array.shift())
        exitArray.push( ...array.map(item => item.pop()))
        !!array.length ? exitArray.push( ...array.pop().reverse()) : exitArray
        exitArray.push( ...array.map(item => item.shift()).reverse())
    }
    if (!array.length) {
        return exitArray
    }

}

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); //[1, 2, 3, 6, 9, 8, 7, 4, 5];
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]])); // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13];
console.log(snail([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])); // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];

//https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/solutions/javascript