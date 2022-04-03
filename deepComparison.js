function deepEqual(a, b) {
    //take care of the null exception
    if (a === null && b === null) {
        return true;
    }
    else if (a === null || b === null) {
        return false;
    }

    let typeA = typeof(a);
    let typeB = typeof(b);

    //logic for if they are both objects
    if(typeA === 'object' && typeB === 'object') {
        //check the objects have the same properties
        const aProperties = Object.keys(a);
        const bProperties = Object.keys(b);
        
        if(aProperties.length !== bProperties.length) {
            return false;
        }
        for(let i = 0; i < aProperties.length; i++) {
            if (aProperties[i] !== bProperties[i]) {
                return false
            }
        }
        for(let i = 0; i < aProperties.length; i++) {
            if(deepEqual(a[aProperties[i]], b[bProperties[i]]) === false) {
                return false;
            };
        }
    }

    //direct comparison if they're not both objects 
    if (a === b) {
        return true;
    }
    return false;
}
