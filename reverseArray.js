//Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
//For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
//The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

function reverse(array) {
    let length = array.length;
    let newArray = [];
    for (let i = 1; i < (length + 1); i++) {
        let shiftElement = length - i;
        newArray.push(array[shiftElement]);
    }
    return newArray;
};

function reverseInPlace(array) {
    let halfLength = Math.floor((array.length / 2));
    for (let i = 0; i < halfLength; i++) {
        let tmp = array[i];
        array[i] = array[(array.length - 1 - i)];
        array[(array.length - 1 - i)] = tmp;
         }
    return array;
         };
