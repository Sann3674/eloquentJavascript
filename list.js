function arrayToList(arr) {
    let list = {};
    list.value = arr.length;
    list.rest = null;
    arr.pop();
    newLength = arr.length;
    for(let i = (newLength - 1); i >= 0; i--) {
        let newObj = {};
        new.value = (i + 1);
        new.rest = list;
    }
    return list;
};
