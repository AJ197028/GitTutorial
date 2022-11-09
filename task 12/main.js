function saveToLocalStorage(event){
  event.preventDefault();
  const name = event.target.username.value;
  const email = event.target.emailid.value;
  const obj = {
    name,
    email
  }

  // Setting unique key as email

  localStorage.setItem(obj.email, JSON.stringify(obj)); 
  showNewUserOnScreen(obj);

  //getting particular user details in object form
  // JASON.parse(localStorage.getItem('user1@gmail.com'));  

  // const obj1 = JSON.parse(localStorage.getItem('user1@gmail.com')); 
  // obj1.name;      //accessing the elements ie o/p user 
  
}
function showNewUserOnScreen(user){
    const parentNode = document.getElementById('listofUsers');
    const childHtML = `<li> ${user.name} - ${user.email} </li>`
    parentNode.innerHTML = parentNode.innerHTML+childHtML;

  }  
