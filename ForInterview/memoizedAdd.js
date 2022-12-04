// a simple function to add something
// const add = (n) => (n + 10);

const add = (n) => {
    let cache = {}
    return (n) => {
        if (n in cache) {
            console.log('cached');
            return cache[n]
        } else {
            const result = n + 10;
            cache[n] = result;
            console.log('calculated');
            return cache[n]
        }
    }
}

const newAdd = add();
console.log(newAdd(9)); // 19 calculated
console.log(newAdd(9)); // 19 cached