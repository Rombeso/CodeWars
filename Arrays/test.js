let str = "Я люблю JavaScript";

// эти два теста делают одно и то же
console.log( /люблю/i.test(str) ); // true
console.log( str.search(/люблю/i) != -1 ); // true

console.log(1)

setTimeout(() => {
    console.log(2);
})

const promise1 = new Promise( resolve => {
    console.log(2);
    resolve(4);
})

const promise2 = new Promise( resolve => {
    console.log(5);
    resolve(6);
})

promise1.then(console.log);
promise2.then(console.log);

console.log(2);