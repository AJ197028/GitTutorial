
// Local Sotrage Object

let myObj = {
    name: 'Domanic',
    age: 56
}
//localStorage.setItem('myObj', myObj);
//console.log(localStorage);
//console.log(localStorage.getItem('myObj'));                         //op null ie object object 
// console.log(localStorage.getItem('muObj').name);                   //op undefined    

let myObj_serialized = JSON.stringify(myObj);                         //convert object as string
localStorage.setItem('myObj', myObj_serialized );                     //string representation of object
                         
let myObj_deserialized = JSON.parse(localStorage.getItem('myObj'));   //Convert jason string back to object

    
console.log(myObj_deserialized);
