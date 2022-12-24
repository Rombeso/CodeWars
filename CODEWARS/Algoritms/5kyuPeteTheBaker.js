function cakes(recipe, available) {
    let result
    for (let key in recipe) {
        console.log(key in available)
        if (key in available) {
            const cakes = Math.floor(available[key] / recipe[key])
            if (cakes < 0) {
                return 0
            } else {
                result === undefined ? result = cakes : (result > cakes ? result = cakes : result)
            }
        } else {
            return 0
        }
    }
    return result
}

// must  return 2
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));
// must return 0
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}));

//https://www.codewars.com/kata/525c65e51bf619685c000059/solutions/javascript