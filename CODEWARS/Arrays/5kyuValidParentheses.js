//https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

function validParentheses(parens) {
    // your code here ..
    let arr = parens.split('');
    console.log('arr', arr)
    if (arr[0]===')' || arr[arr.length-1]==='(') {
        console.log('tyt')
        return false
    }
    let count = 0;
    for (let key of arr) {
        console.log('key', key)
        key === '(' ? count++ : count--
        if (count < 0) {
            return false
        }
    }
    if (count !== 0) {
        return false
    }
        return true;
}

console.log(validParentheses( "(" )) // false
console.log(validParentheses( ")(()))" )) // false
console.log(validParentheses( "(())((()())())" )) // true
console.log(validParentheses( "()" )) // true
console.log(validParentheses( "()(" )) // false

// https://www.codewars.com/kata/52774a314c2333f0a7000688/solutions/javascript