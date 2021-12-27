function listArray (start, end) {
    let newArray = [];
    let difference = end - start;
    if (end > start) {
        for (let i = 0; i <= difference; i++) {
            newArray.push((start + i));
        }
    }
    return newArray;
};
