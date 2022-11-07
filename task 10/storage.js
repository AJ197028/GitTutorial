
// Local Storage (inspect element => aplication in brpwser)

localStorage.setItem('name','Bob');                 //set key,value
console.log(localStorage.getItem('name'));          //get the value from key
localStorage.removeItem('name');                    //remove the key

// Session Storage

sessionStorage.setItem('name','Jhon');              //set key,value
sessionStorage.setItem('name','Bob');               //change the value
console.log(sessionStorage.getItem('name'));        //get the value from key
sessionStorage.removeItem('name');                  //remove the key

//Cookies

document.cookie = 'name=kyle;expires=' + new Date(2022, 10, 8).toUTCString();       //set cookie 
document.cookie = 'last=jhonson;expires=' + new Date(2022, 10, 8).toUTCString();

console.log(document.cookie);                         //view all cookie















