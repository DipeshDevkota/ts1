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

class Userrr{
    constructor(public _name:string,public _age:number){}

    get name()
    {
        return this._name;
    }

    set myname(value:string){
        this._name=value
    }
};

let U1= new Userrr('dipesh',20)