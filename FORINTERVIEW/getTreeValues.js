const tree = {
    value: 1,
    children: [
        {
            value: 11,
            children: [
                {value: 3},
            ]
        },
        {
            value: 4,
            children: [
                {value: 5},
                {value: 10},
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
// function getTreeValues(tree) {
//     let stack = [tree];
//     let result = []
//     while (stack.length > 0) {
//         const node = stack.pop()
//         if (node.value !== undefined) {
//             result.push(node.value);
//         }
//         if ( node.children?.length) {
//             stack.push(...node.children)
//         }
//     }
// return result.sort()
// }

// function getTreeValues(tree) {
//     let result = [];
//     for (let val in tree) {
//         if (val === 'value') {
//             result.push(tree[val])
//         } else {
//             result = [...result, ...getTreeValues(tree[val])]
//         }
//     }
//     return result.sort((a, b) => a - b)
// }


function getTreeValues(tree) {
    const stack = [tree];
    const result = [];

    while (stack.length > 0) {
        let node = stack.pop()

        if (node.value !== undefined) {
            result.push(node.value)
        }
        if (node.children?.length) {
            stack.push(...node.children)
        }
    }
    return result
}

console.log(getTreeValues(tree)); // [1, 2, 3, 4, 5, 6]