function dirReduc(arr) {
    const opositDirections = {
        NORTH: 'SOUTH', WEST: 'EAST', SOUTH: 'NORTH', EAST: 'WEST'
    }

    const result = arr.reduce((acc, item) => {
            if (acc[acc.length - 1] === opositDirections[item]) {
                acc.pop()
            } else {
                acc.push(item)
            }
        return acc
        }, [])
    return result
}

console.log(dirReduc(
    ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
//["WEST"]

console.log(dirReduc(
    ["NORTH", "WEST", "SOUTH", "EAST"]));
//    ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(
    ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));
// []

//https://www.codewars.com/kata/550f22f4d758534c1100025a/solutions/javascript