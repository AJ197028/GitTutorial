function saveToLocalStorage(event){
  event.preventDefault();
  const name = event.target.username.value;
  const email = event.target.emailid.value;
  const phonenumber = event.target.phonenumber.value
  const obj = {
    name,
    email,
    phonenumber
  }

  // Setting unique key as email

  localStorage.setItem(obj.email, JSON.stringify(obj)); 
  showNewUserOnScreen(obj);

  
}

//Hold the all detsils after page refresh
window.addEventListener("DOMContentLoaded", () =>{

  const localStorageObj = localStorage;                   //contain all storage data          
  const localStorageKeys = Object.keys(localStorageObj);  //keys  
  
  for(var i=0; i<localStorageKeys.length; i++){
    const key = localStorageKeys[i];                      //show all emailid
    
    userDetailString =  localStorageObj[key];             //every user details as string     
    userDetailObj = JSON.parse(userDetailString)          //every user details as object            
     
    showNewUserOnScreen(userDetailObj);
  }
})

//show all user details
function showNewUserOnScreen(user){
    // clear field after submiting
    document.getElementById('emailid').value = '';
    document.getElementById('username').value = '';
    document.getElementById('phonenumber').value ='';
    // console.log(localStorage.getItem(user.emailId))
  
    const parentNode = document.getElementById('listofUsers');
    const childHtML = `<li id = ${user.email}> ${user.name} - ${user.email} - ${user.phonenumber} 
                      <button onclick = editUserDetails('${user.email}','${user.name}','${user.phonenumber}')>Edit</button>
                      <button onclick = deleteUser('${user.email}')>Delete</button>
                      </li>`
    parentNode.innerHTML = parentNode.innerHTML+childHtML;

  }  
  //deleteUser('user1@gmail.com');

//DELETE USER FROM LOCAL STORAGE
function deleteUser(emailid){
  console.log(emailid)
  localStorage.removeItem(emailid);                      //remove user from local
  removeUserFromScreen(emailid);                         //to remove from screen also
}

//DELETE USER FROM SCREEN
function removeUserFromScreen(emailid){
  const parentNode = document.getElementById('listofUsers');
  const childNodeToBeDeleted = document.getElementById(emailid);
  parentNode.removeChild(childNodeToBeDeleted);
}

//EDIT USER
function editUserDetails(emailid, name, phonenumber){
  document.getElementById('emailid').value = emailid;
  document.getElementById('username').value = name;
  document.getElementById('phonenumber').value = phonenumber ;

  deleteUser(emailid);
}