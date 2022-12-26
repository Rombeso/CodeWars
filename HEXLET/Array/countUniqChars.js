
function countUniqChars(text1) {
    let result = []
    for(let val of text1.split('').join('')) {
       if (!result.includes(val))
        result.push(val)
    }
    console.log(result)
    return result.length
}

const text1 = 'yyab'; // y, a, b
console.log(countUniqChars(text1)); // 3

const text2 = 'You know nothing Jon Snow';
console.log(countUniqChars(text2)); // 13

// Если передана пустая строка, то функция должна вернуть `0`
const text3 = '';
console.log(countUniqChars(text3)); // 0