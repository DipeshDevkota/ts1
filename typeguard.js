"use strict";
//typeguards
//typeguards -> type narrowing 
// function abcd(arg:string | number | any)
// {
//     if(typeof arg === 'number')
//     {
//         return "number"
//     }
//     else if(typeof arg === 'string')
//     {
//         return 'string'
//     }
//     else{
//         throw new Error('ok error')
//     }
// }
// console.log((abcd(12)))
// console.log((abcd("hello")))
// abcd(true)
class TvRemote {
    switchTvoff() {
        console.log('switching off tv');
    }
}
class CarRemote {
    switchCarOff() {
        console.log('switching off car');
    }
}
const tv = new TvRemote();
const car = new CarRemote();
function switchoffkaro(device) {
    if (device instanceof TvRemote) {
        device.switchTvoff();
    }
    else if (device instanceof CarRemote) {
        device.switchCarOff();
    }
}
switchoffkaro(tv); // switching off tv
switchoffkaro(car); // switching off car
