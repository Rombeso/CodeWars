//https://unicode-table.com/ru/
function rot13(message) {
    rangeBigLetter = {
        min: 65,
        max: 90
    }
    rangeSmallLetter = {
        min: 97,
        max: 122
    }
    const CIPHER = 13;
    let string = '';

    function setLetterNewString(range, codeNumber) {
        //debugger
        const rest = range.max - codeNumber;
        if (rest < CIPHER) {
            string += String.fromCodePoint((range.min - 1) + (CIPHER - rest))
        } else {
            string += String.fromCodePoint(codeNumber + CIPHER)
        }
    }

    for (let key of message) {
        if (/([A-Z]|[a-z])/g.test(key) === false) {
            string += key;
        } else {
            const codeNumber = key.codePointAt(0);
            if (codeNumber >= rangeBigLetter.min && codeNumber <= rangeBigLetter.max) {
                setLetterNewString(rangeBigLetter, codeNumber)
            } else {
                setLetterNewString(rangeSmallLetter, codeNumber)
            }
        }

    }
    return string
}

//console.log('Z'.codePointAt(0))
console.log(rot13('Tes1t')) // Grfg
console.log(rot13('tes!t')) // grfg

// https://www.codewars.com/kata/530e15517bc88ac656000716/solutions/javascript