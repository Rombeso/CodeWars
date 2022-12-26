
// Первое число – сколько забила Канада
// Второе число – сколько забила СССР
const scores = [
    [3, 7], // Первая игра
    [4, 1], // Вторая игра
    [4, 4],
    [3, 5],
    [4, 5],
    [3, 2],
    [4, 3],
    [6, 5],
];

function getSuperSeriesWinner(scores){
    let canada = 0;
    let ussr = 0;
    for (let item of scores) {
        canada += item[0];
        ussr += item[1];
    }
    return canada === ussr ? null : (canada > ussr ? 'canada' : 'ussr')
}

console.log(getSuperSeriesWinner(scores)); // 'canada'