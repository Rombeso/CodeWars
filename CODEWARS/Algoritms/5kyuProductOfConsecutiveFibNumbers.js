// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

const fibeLine = [0, 1]

function productFib(prod) {
    if (fibeLine.length < 3) {
        for (let i = 0; i < 40; i++) {
            fibeLine.push(fibeLine[i] + fibeLine[i + 1])
        }
    }
    const startNumber = String(prod).length > 5 ? fibeLine.findIndex(el => el > 10 ** (String(prod).length - 6)) : 0
    for (let i = startNumber; i < fibeLine.length - 1; i++) {
        let stepResult = fibeLine[i] * fibeLine[i + 1];
        if (stepResult === prod) {
            return [fibeLine[i], fibeLine[i + 1], true]
        }
        if (stepResult > prod) {
            return [fibeLine[i], fibeLine[i + 1], false]
        }
    }
}

// console.log(productFib(4895)); // [55, 89, true])
// console.log(productFib(5895)); // [89, 144, false])
// console.log(productFib(74049690)); // [6765, 10946, true])
// console.log(productFib(84049690)); // [10946, 17711, false])
// console.log(productFib(193864606)); // [10946, 17711, true])
// console.log(productFib(447577)); // [610, 987, false])
// console.log(productFib(602070)); // [610, 987, true])
// console.log(productFib(23843770274)); // [121393, 196418, false ]
console.log(productFib(360684711361584)); // [ 14930352, 24157817, false ]
console.log(productFib(2932587700812)); // [ 14930352, 24157817, false ]
console.log(productFib(2932589879121)); // [ 1346269, 2178309, false ]

// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/solutions/javascript