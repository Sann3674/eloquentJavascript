//use the reduce method in combination with the concat method to 'flatten' an array of arrays into a 
//single array that has all the elements of the original arrays.

function flatten(array) {
    let current = [];
    for (let element of array) {
        current = current.concat(element);
    }
    return current;
}
