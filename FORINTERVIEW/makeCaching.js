// Кеширующий декоратор

function f(x) {
    return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
    let cache = {};
    return (x) => {
        if (x in cache) {
            console.log(`Fetching from cache ${cache[x]}`)
            return true
        } else {
            cache[x] = f(x)
            console.log(`Fetching from cache ${cache[x]}`)
            return false
        }
    }
}

f = makeCaching(f);

let a, b;

a = f(1);
b = f(1);
console.log(a == b); // true (значение закешировано)

b = f(2);
console.log(a == b); // false, другой аргумент => другое значение