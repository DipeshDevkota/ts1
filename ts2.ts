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

interface User {
    name:string,
    email:string,
    password:string,
}


interface Admin extends User {
    admin:boolean
}


function abcd(obj:Admin){
    
}

