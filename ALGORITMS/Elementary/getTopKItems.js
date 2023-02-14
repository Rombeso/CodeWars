// На входе алгоритма массив из чисел.
// Необходимо вычислить ТОП к самых больших чисел

const getTopKItems = (data, k) => // O(n) = NlogN, 1
{
    return data.sort((a,b) => a - b).splice(-k);
}



console.log(getTopKItems([1,2,3,4,5,6,7,8,9], 3)) // 7,8,9
console.log(getTopKItems([9,8,7,6,5,4,3,2,1 ], 4)) // 6,7,8,9

