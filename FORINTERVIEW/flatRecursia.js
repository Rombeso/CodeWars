// Написать метод flatRecursia

// function flatRecursia(arr) {
//     debugger
//     if (!Array.isArray(arr)) {
//         return [arr].reduce((acc, item) => {
//             acc.push(item)
//             return acc
//         }, [])
//     } else {
//         let result = [];
//         for (let insideArr of arr) {
//             result.push(...flatRecursia(insideArr))
//         }
//         return result
//     }
// }

// V2


function flatRecursia(arr) {
    let result = [];
        arr.forEach(item => {
            if (Array.isArray(item)) {
            result = [...result, ...flatRecursia(item)]
            } else {
             result = [...result, item]
            }
        })
        return result
}


console.log(flatRecursia([1, [1, 2, [3, 4]], [2, 4]])) // [1, 1, 2, 3, 4, 2, 4]

