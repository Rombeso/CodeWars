function formatDuration(seconds) {
    if (seconds === 0) {
        return 'now'
    }
    const steps = {
        year: 31536000,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1,
    }
    let remains = seconds;
    const arrForString = [];
    let string = '';
    for (let key in steps) {
        let round = remains / steps[key]
        if (round >= 1) {
            console.log('round', round)
            arrForString.push(`${Math.floor(round)} ${key}${Math.floor(round) > 1 ? 's' : ''}`);
            remains = remains % steps[key]
            console.log('remains', remains)
        }
    }
    arrForString.map((item, i) => {
        if (arrForString.length === 1) {
            return string = item;
        }
        if (arrForString.length - 1 === i + 1) {
            return string += `${item} and `
        }
        if (arrForString.length === i + 1) {
            return  string += item
        } else {
            return string += `${item}, `
        }

    })
    return string
}


// console.log(formatDuration(1)) // "1 second");
// console.log(formatDuration(62)) // "1 minute and 2 seconds");
// console.log(formatDuration(120)) // "2 minutes");
// console.log(formatDuration(3600)) // "1 hour");
//console.log(formatDuration(3662)) // "1 hour, 1 minute and 2 seconds");
// console.log(formatDuration(31536002))

// https://www.codewars.com/kata/52742f58faf5485cae000b9a/solutions/javascript