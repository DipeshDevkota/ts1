"use strict";
//function and its types'
function abcdef(name, age, cb) {
    cb('ok');
}
abcdef("harsh", 23, (arg) => {
    console.log(arg);
});
