function getLastWordLength(str) {
    if(!str.length){
        return 0
    }

    return str.trim().split(' ').reverse()[0].length
}

console.log(getLastWordLength('')); // 0
//
console.log(getLastWordLength('man in BlacK')); // 5

console.log(getLastWordLength('hello, world!  ')); // 6

// https://ru.hexlet.io/challenges/js_arrays_length_of_last_exercise