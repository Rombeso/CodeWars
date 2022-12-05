function humanReadable (seconds) {
    if (seconds > 359999) {
        return 'The number should not be more than 359999';
    }
    const step = {
        hour: 3600,
        minute: 60,
        second: 1,
    }
let string = ''
    let remain = seconds
    for (let key in step) {
        let integer = remain / step[key]
        string += `${integer >= 1 ? (Math.floor(integer) < 10 ? '0' + Math.floor(integer): Math.floor(integer)) : '00'}${key !== 'second' ? ':' : ''}`
        remain = remain % step[key]
    }
    return string;
}


console.log(humanReadable(86399)); // '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(86400)); // '24:00:00', 'humanReadable(86400)');
console.log(humanReadable(359999)); // '99:59:59', 'humanReadable(359999)');
console.log(humanReadable(369999));
console.log(humanReadable(60));

//https://www.codewars.com/kata/52685f7382004e774f0001f7/solutions/javascript