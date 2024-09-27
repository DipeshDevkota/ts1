"use strict";
// let a:boolean ;
// let arr:[];
// let str:string='hey'
// let boolean:true
// let arr:[boolean,number,string]=[false,12,"haha"];
// let a:[boolean,number,string]=[false,12,'haha']
// let variable:unknown;
// variable =12;
// variable ='hey';
// function abcd():string{
//     return 'LOL';
// }
// abcd().toLocaleLowerCase
//function that doesn't return anything:
// function bcdef():void{
//     console,log('hey')
// }
//enums
// enum Direction {
//     top ='TOP',
//     left="LEFT",
//     right="RIGHT",
//     bottom ='BOTTOM',
// }
// Direction.bottom
var MousePosition;
(function (MousePosition) {
    MousePosition[MousePosition["x"] = 0] = "x";
    MousePosition[MousePosition["y"] = 0] = "y";
})(MousePosition || (MousePosition = {}));
MousePosition.x;
//enum helps to group things
var Human;
(function (Human) {
    Human["name"] = "harsh";
    Human[Human["age"] = 25] = "age";
})(Human || (Human = {}));
console.log(Human.name);
//tuples
let arr = [12, 'ok'];
function abcd() {
    return '12';
}
///Type Inference
// UNderstanding Type Inference
// Type Annotations
