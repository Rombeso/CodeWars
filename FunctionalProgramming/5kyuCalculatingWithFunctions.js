// eval опасно использовать, можно использовать конструктор функции чтобы вычислять строковое значение
//function evil(fn) {
//    return new Function('return ' + fn)();
//}
//let result = evil(`${firstNum}${opperation}${secondNum}`)
//https://stackoverflow.com/questions/6479236/calculate-string-value-in-javascript-not-using-eval
// firstNum
// secondNum
function zero() {
    return doingOpperations(0)
}
function one() {
    return doingOpperations(1)
}
function two() {
    return doingOpperations(2)
}
function three() {
    return doingOpperations(3)
}
function four() {
    return doingOpperations(4)
}
function five() {
    return doingOpperations(5)
}
function six() {
    return doingOpperations(6)
}
function seven() {
   return  doingOpperations(7)
}
function eight() {
    return doingOpperations(8)
}
function nine() {
    return doingOpperations(9)
}

function plus() {
    setOperator('+')
}
function minus() {
    setOperator('-')
}
function times() {
    setOperator('*')
}
function dividedBy() {
    setOperator("/")
}

function setUndefined() {
    console.log('opperation', opperation)
    firstNum = undefined
    opperation = undefined
    secondNum = undefined
    opperation = undefined
}

function doingOpperations(num) {
    if (typeof firstNum === "undefined") {
        firstNum = num;
        return
    }
    if(typeof secondNum === "undefined") {
        secondNum = num;
        let result = eval(`${secondNum}${opperation}${firstNum}`)
        console.log('result', result)
        setUndefined()
        console.log('result2', Math.round(result))
        return Math.floor(result)
    }
}

function setOperator(string) {
    if (typeof opperation === "undefined") {
        opperation = string;
    }
}

console.log(seven(times    (five ()))) // 35);
console.log(four (plus     (nine ()))) // 13);
console.log(eight(minus    (three()))) // 5);
console.log(six  (dividedBy(two  ()))) //  3);
console.log(nine(plus(two()))) // 11
console.log(three(dividedBy(two()))) // 1

// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript