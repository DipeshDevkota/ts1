"use strict";
// Interfaces and Type Aliases
// Defining Interfaces
// Using Interfaces to define object Shapes
// Extending Interfaces
// Type Aliases
// Intersection Types
// interface User
// {
//     name:string,
//     email:string,
//     password?:string,
// }
// function abcd(obj:User){
// }
// abcd({name:"haha",email:"abcd@gmail,com", password:"abcd12"})
///Extending Interfaces
// interface User {
//   name: string;
//   email: string;
//   password: string;
// }
// interface Admin extends User {
//   admin: boolean;
// }
// function abcd(obj: Admin) {}
// ??what is type in ts
// type arg= string | null;
// function abcd(obj:arg){
// }
// abcd(1)
///error cause type is not number here
// abcd("dipesh")
//correct cause type is string here
// class Phone{
//     radius=20;
//     price=100;
//     color="black"
// }
// let p1= new Phone();
// let p2= new Phone()
class BottleMaker {
    constructor(brand, price, color, material) {
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.material = material;
    }
}
let p1 = new BottleMaker("Milton", 1200, 'yellow', 'metal');
class MObileMaker {
    constructor(brand, price, color) {
        this.price = price;
        this.color = color;
    }
}
let m1 = new MObileMaker('IPhone', 1400, 'black');
class Music {
    constructor(name, artist, thumbnail = "a.jpg", length, command) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.command = command;
        if (!thumbnail) {
            this.thumbnail = 'a.jpg';
        }
    }
}
let music1 = new Music("ChalChaiyaChaiya", 'Harsh Sharma', '', 1200, false);
