
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === "" || emailInput.value === ""){
        msg.classList.add("error");
        msg.innerHTML = "Please enter all fields";

        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const li = document.createElement("li");        //put list in comment in html 
        li.appendChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`));
        
            userList.appendChild(li);

            let myObj = {
                name: nameInput.value,
                email: emailInput.value
            }
             
            //string representation

            let myObj_serialized = JSON.stringify(myObj);                         //convert object as string
            localStorage.setItem('myObj', myObj_serialized ); 
            console.log(myObj_serialized);
 
            //clear fields
            nameInput.value = "" ;
            emailInput.value = "" ;
    }
}

// // Local Sotrage Object

// let myObj = {
//     name: 'Domanic',
//     age: 56
// }
// //localStorage.setItem('myObj', myObj);
// //console.log(localStorage);
// //console.log(localStorage.getItem('myObj'));                         //op null ie object object 
// // console.log(localStorage.getItem('muObj').name);                   //op undefined    

// let myObj_serialized = JSON.stringify(myObj);                         //convert object as string
// localStorage.setItem('myObj', myObj_serialized );                     //string representation of object
                         
// let myObj_deserialized = JSON.parse(localStorage.getItem('myObj'));   //Convert back to object

    
// console.log(myObj_deserialized);












