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

function sumArray (array) {
    let total = 0;
    for (const number of array) {
        total += number;
    }
    return total;
};

//bonus function
function listArray (start, end, step=1) {
    let newArray = [];
    let difference = end - start;
    let absDiff = Math.abs(difference);
    if (difference > 0) {
        for (let i = 0; i <= absDiff; i += step) {
            newArray.push((start + i));
        }
    }
    else if (difference < 0) {
        for (let i = 0; i <= absDiff; i += step) {
            newArray.push((start - i));
        }
    }
    else {
        newArray.push(start);
    }
    return newArray;
};
