"use strict";
// class BottleMakerss{
//     constructor(private name:string){
//         this.name=name;
//     }
//     changing(){
//         this.name='dipesh';
//     }
// }
// let B1= new BottleMakerss("Miltonnn");
// B1.changing()
//Abstract classes and methods
// class BottleeMaker{
//     constructor(public name:string){}
// }
// class MetalBottleeMaker extends BottleeMaker{
//     constructor(name:string){
//         super(name)
//     }
//     getValue(){
//         console.log(this.name)
//     }
// }
// let b1= new MetalBottleeMaker("Chiltonn");
// b1.getValue()
// class PlaneMaker {
//    protected name='milton';
// }
// class MetalPlaneMaker extends PlaneMaker{
//     public material='metal';
//     changeName(){
//         this.name='arko name';
//     }
// }
// let m3= new MetalPlaneMaker();
// m3.changeName()
class User {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
let u1 = new User("Dipesh", 20, 'Male');
let u2 = new User('lala', 18);
