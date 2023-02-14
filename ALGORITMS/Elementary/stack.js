
const IsValidParentheses = (str) => {
    const stack = [];
    const arr = str.split('')
    if (arr[0] === ')' || !arr.length) {
        return false
    }
    for (let i = 0; i < arr.length; i++) {
        let el = stack[stack.length-1];
        if (arr[i] === el || el === undefined) {
            stack.push(arr[i]);
        } else {
            stack.pop();
        }
    }
    let result = stack.length ? false : true;
   return  result
}

console.log(IsValidParentheses('()'))
console.log(IsValidParentheses('((()))'))
console.log(IsValidParentheses('()()()'))

console.log(IsValidParentheses(')()()'))
console.log(IsValidParentheses('()('))
console.log(IsValidParentheses('(()))'))

