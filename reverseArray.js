function reverse(array) {
    let length = array.length;
    let newArray = [];
    for (let i = 1; i < (length + 1); i++) {
        let shiftElement = length - i;
        newArray.push(array[shiftElement]);
    }
    return newArray;
};
