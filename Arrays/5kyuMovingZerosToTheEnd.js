// https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
    const zeroArr = [];
    const newArr = [];

    for (let item of arr) {
        if (item === 0) {
            zeroArr.push(item)
        } else {
            newArr.push(item)
        }
    }
    return newArr.concat(zeroArr)
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]

// https://www.codewars.com/kata/52597aa56021e91c93000cb0/solutions/javascript