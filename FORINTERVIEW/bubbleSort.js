// Сортировка
// Классика

// function bubbleSort(arr) {
//     for (let i = arr.length-1; i > 0; i--) {
//         for (let k = 0; k < i; k++) {
//             if(arr[k] > arr[k+1]) {
//                 let temp = arr[k];
//                 arr[k] = arr[k+1];
//                 arr[k+1] = temp
//             }
//         }
//     }
// return arr
// }

// С указателем swapped

function bubbleSort(arr) {
    let swapped
    do {
        swapped = false;
        arr.forEach((item, index) => {
            if (item > arr[index + 1]) {
                let temp = item;
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
            }
        })
    } while (swapped)

    return arr
}

console.log(bubbleSort([])); // []
console.log(bubbleSort([3, 10, 4, 3]));// [3, 3, 4, 10]
console.log(bubbleSort([3, 2, 10, -2, 0]));// [ -2, 0, 2, 3, 10 ]
