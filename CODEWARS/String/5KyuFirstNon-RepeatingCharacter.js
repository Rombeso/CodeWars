// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {
    // let index = 0;
    // if (s.length > 1 && s.split('').every(el => el === s[0])) return null
    // return s.split('').reduce((acc, el, i) => {
    //     if (acc === '') {
    //         index = 1
    //         acc = el
    //         return acc
    //     }
    //     if (acc.toLowerCase() === el.toLowerCase()) {
    //         while (s.toLowerCase()[index] === s.toLowerCase()[index+1]) {
    //             index++
    //             if (s.toLowerCase().split('').includes(s.toLowerCase()[index]), index+1) {
    //                     index++
    //                 }
    //         }
    //
    //         acc = s[index]
    //         index++
    //         return acc
    //     }
    //     if (acc.toLowerCase() !== el.toLowerCase()) {
    //         return acc
    //
    //     }
    // }, '')

    let str = s.toLowerCase();
    for(let i = 0; i < str.length; i++) {
        console.log(s[i], str.indexOf(str[i]), str.lastIndexOf(str[i]))
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return s[i];
        }
    }
    return "";
}

// console.log(firstNonRepeatingLetter('a')); // 'a');
// console.log(firstNonRepeatingLetter('stress')); //, 't')
console.log(firstNonRepeatingLetter('mooonmen')); //, 'e');
// console.log(firstNonRepeatingLetter('mmmmmm')); //, 'null');
// console.log(firstNonRepeatingLetter('sTreSS')); //, 'T');