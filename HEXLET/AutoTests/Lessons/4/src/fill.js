const fill = (coll, value, start = 0, end = coll.length) => {
    const collLength = coll.length;
    if (collLength === 0) {
        return [];
    }
    if (value === undefined) {
        return coll;
    }
    let normalizedEnd = end > collLength ? collLength : end;

    for (let i = start; i < normalizedEnd; i++) {
        coll[i] = value
    }
    console.log(coll)
    return coll
}

export default fill;