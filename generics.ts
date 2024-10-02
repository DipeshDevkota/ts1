// function abcd<H>(a:H,b:string,c:number){}
// abcd<string>("hahah","heheh",12);
// generic function

// function log<T>(val:T){
//     console.log(val);
// }

// log<number>(12)


// generic interfaces


// interface Halua<T>
// {
//     name:string;
//     age:number;
//     key:T
// }

// function abcdee(obj:Halua<string>){

// }

// abcdee({name:"food",age:25,key:'ababa'})



// generic classes



class BottleMakers<T>{
    constructor(public key:T){}
}


let b1= new BottleMakers<string>("hey");
let b2= new BottleMakers<number>(12);
console.log(b1,b2)