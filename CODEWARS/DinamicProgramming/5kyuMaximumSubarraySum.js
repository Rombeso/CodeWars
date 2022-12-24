//Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

var maxSequence = function(arr){

    let maxNumber = 0;
    let sum = 0;

    for (let num of arr) {
        debugger
        sum = Math.max(num, sum + num);
        if (sum < 0) {
            sum = 0;
        } else {
            maxNumber  = Math.max(sum, maxNumber);
        }
    }

    return maxNumber
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// should be 6: [4, -1, 2, 1]

// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/solutions/javascript