function isEven(n) {
    if (n === 1) {
        return false;
    }
    else if (n === 0) {
        return true;
    }
    else if (n > 0) {
        return isEven(n - 2);
    }
    else if (n < 0) {
        return isEven(n + 2);
    }
};
