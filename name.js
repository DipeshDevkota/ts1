"use strict";
// class Userss {
//     constructor(public name:string, public age:number){}
//     getName(){
//         return this.name;
//     }
//     setName(value:string){
//         this.name=value;
//     }
// }
// let ua= new Userss("Dipehs",20);
class Userrr {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    get name() {
        return this._name;
    }
    set myname(value) {
        this._name = value;
    }
}
;
let U1 = new Userrr('dipesh', 20);
