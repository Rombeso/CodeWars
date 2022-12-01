let str = "Я люблю JavaScript";

// эти два теста делают одно и то же
console.log( /люблю/i.test(str) ); // true
console.log( str.search(/люблю/i) != -1 ); // true