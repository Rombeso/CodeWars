const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {value: 3},
            ]
        },
        {
            value: 4,
            children: [
                {value: 5},
                {value: 6},
            ]
        }
    ]
};

// рекурлсивный обход дерева
// function getTreeValues(tree) {
// let result = []
//     for (let val in tree) {
//         if (val === 'value') {
//             result = [...result, tree[val]]
//         } else {
//             result = [...result, ...getTreeValues(tree[val]) ]
//         }
//     }
//     return result
// }

/// C помощью стэка, но потерен порядок, порядок добавляем с помощбю sort
function getTreeValues(tree) {
    let stack = [tree];
    let result = []
    while (stack.length > 0) {
        debugger
        const node = stack.pop()
        if (node.value !== undefined) {
            result.push(node.value);
        }
        if ( node.children?.length) {
            stack.push(...node.children)
        }
    }
return result.sort()
}

console.log(getTreeValues(tree)); // [1, 2, 3, 4, 5, 6]