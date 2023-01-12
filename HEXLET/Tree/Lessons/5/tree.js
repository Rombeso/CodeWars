const changeOwner = (tree, owner) => {
    const name = getName(tree);
    const newMeta = _.cloneDeep(getMeta(tree));
    newMeta.owner = owner;

    if(isFile(tree)){
        // Возвращаем обновлённый файл
        return mkFile(name, newMeta)
    }

    const children = getChildren(tree);
    // Ключевая строчка
    // Вызываем рекурсивное обновление каждого ребёнка
    const newChildren = children.map(child => {
        changeOwner(child, owner)
    })
    // Возвращаем обновлённую директорию
    return mkDir(name, newChildren, newMeta)

}