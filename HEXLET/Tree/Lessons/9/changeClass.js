// @ts-check
//import _ from 'lodash';

// BEGIN (write your solution here)
const tree = {
    name: 'div',
    type: 'tag-internal',
    className: 'hexlet-community',
    children: [
        {
            name: 'div',
            type: 'tag-internal',
            className: 'old-class',
            children: [],
        },
        {
            name: 'div',
            type: 'tag-internal',
            className: 'old-class',
            children: [],
        },
        {
            content: "Сообщество",
            name: "",
            type: "text",
        },
    ],
};

function changeClass(tree, oldClass, newClass){

    const innerFunc = (node) => {

        const newNode = {...node};

        if (newNode.className === oldClass) {
            newNode.className = newClass;
        }
        if (newNode.type === 'tag-internal' && newNode.children.length) {
            const newChildren = node.children.map(innerFunc);
            newNode.children = newChildren;
        }
        return newNode;
    }
    return innerFunc(tree);
}

console.log(changeClass(tree, 'old-class', 'new-class'));
console.log('tree:', tree)

// export default changeClass;
// END


// function changeClass(tree, oldClass, newClass) {
//     const newTree = { ...tree }
//     if (newTree.className === oldClass) {
//         newTree.className = newClass;
//     }
//     const filtered = newTree.children
//         .map((node) => {
//             const newNode = { ...node};
//             if (newNode.className === oldClass) {
//                 newNode.className = newClass;
//             }
//             if (newNode.type === 'tag-internal' && newNode.children.length) {
//
//                 return changeClass(newNode);
//             }
//             return newNode;
//         })
//
//     newTree.children = filtered
//     return newTree;
// }