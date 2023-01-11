function summaryRanges(arr){
    let result = []
    if(arr.length < 2) {
        return result;
    }
    let start = null
    for(let id in arr) {
        if(start == null) {
            start = arr[id]
        }
        if (start >= 0) {
            if((arr[id] + 1) !== arr[+id+1] && start !== arr[id]){
                result.push(`${start}->${arr[id]}`);
                start = null
            }
            if (arr[id] > arr[+id+1]) {
                start = null
            }
        }
        if (start < 0)  {
            if((arr[id] - 1) !== arr[+id+1] && start !== arr[id]){
                result.push(`${start}->${arr[id]}`);
                start = null
            }
            if (arr[id] < arr[+id+1]) {
                start = null
            }
        }
    }
    return result
}

console.log(summaryRanges([]));
// []

console.log(summaryRanges([1]));
// []

console.log(summaryRanges([1, 2, 3]));
// ['1->3']

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
// ['0->2', '4->5']

console.log(summaryRanges([110, 111, 112, 111, 100, -5, -4, -2, -3, -4, -5]));
// ['110->112', '-5->-4']

// https://ru.hexlet.io/challenges/js_arrays_summary_ranges_exercise