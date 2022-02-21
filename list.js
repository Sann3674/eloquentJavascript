function arrayToList(array) {
    let list = null;
    for (let i = array.length; i > 0; i--) {
        let useValue = array[(i - 1)];
        list = {value: useValue, rest: list};
    }
    return list;
}
