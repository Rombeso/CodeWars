//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
    let arr = str.split(' ').map( item => {
        if (item.length < 2 && /\W/g.test(item)) {
            return item
        }
        return `${item.substring(1)}${item[0]}ay`;
    }).join(' ');
    console.log(arr)
    return arr
}

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
pigIt('O emporatay o oresmay !');     // Oay emporatay oay oresmay !