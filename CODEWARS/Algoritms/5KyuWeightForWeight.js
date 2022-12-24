function orderWeight(strng) {
let resultObj = {};
    strng.split(' ').map( item => {
      let key =  item.split('').reduce((acc, el) => {
            return acc = acc + +el
        }, 0)
        if (key in resultObj){
            resultObj[key] = [...resultObj[key], item].sort()
        } else  {
            resultObj[key] = [item]
        }
    })
    return Object.values(resultObj).flat().join(' ')
}

console.log(orderWeight("103 123 4444 99 2000")) // "2000 103 123 4444 99")
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")) //, "11 11 2000 10003 22 123 1234000 44444444 9999")

// https://www.codewars.com/kata/55c6126177c9441a570000cc/solutions/javascriptT