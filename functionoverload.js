"use strict";
//function namesame//function overload//
function abcD(a, b) {
    if (typeof a === 'string' && b === undefined) {
        console.log('hey');
    }
    if (typeof a === 'string' && typeof b === 'number') {
        return 123;
    }
    else
        throw new Error("Something is wrong");
}
abcD('hey');
abcD('heyu', 1243);
