//function and its types'


function abcdef(name:string, age:number,cb:(arg:string)=>void)
{
   cb('ok');
}

abcdef("harsh",23,(arg:string)=>{
  console.log(arg)
})