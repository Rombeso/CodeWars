//const names = ['john', 'smith', 'karl'];
const names = ['john', 'smith', 'karl', 'vasya'];


function reverse(names){
    for (let i = 0; i < Math.floor(names.length/2); i++){
        let start = names[i];
        let end = names[names.length-i-1];
        names[names.length-i-1] = start
        names[i] = end
    }
    return names
}

reverse(names);
console.log(names); // => ['karl', 'smith', 'john']

reverse(names);
console.log(names); // => ['john', 'smith', 'karl']
