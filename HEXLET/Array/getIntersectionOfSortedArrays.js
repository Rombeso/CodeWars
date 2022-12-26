// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два отсортированных массива и находит их пересечение.
function getIntersectionOfSortedArrays(arr1, arr2) {
    let small
    let big
    let result = [];
    if (arr2.length >= arr1.length) {
        small = arr1
        big = arr2
    } else {
        small = arr2
        big = arr1
    }
     small.forEach(item => {
        if(big.includes(item)) {
            result.push(item)
        }
    })
    return result
}

console.log(getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30])); // [10, 24]

console.log(getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4])); // []

console.log(getIntersectionOfSortedArrays([], [2])); // []