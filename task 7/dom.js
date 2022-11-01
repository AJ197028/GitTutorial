// TRAVERSING THE DOM
//var ItemList = document.querySelector('#items');
//Parent Node
// console.log(ItemList.parentNode);  
// ItemList.parentNode.style.backgroundColor = 'grey';
// console.log(ItemList.parentNode.parentNode.parentNode);
//Parent Element
// console.log(ItemList.parentElement);  
// ItemList.parentElement.style.backgroundColor = 'grey';
// console.log(ItemList.parentElement.parentElement.parentElement);
//Child Nodes
//console.log(ItemList.childNodes); 
// console.log(ItemList.children);         //convert into html
// console.log(ItemList.children[1]);
// ItemList.children[1].style.backgroundColor = 'yellow';

//First Child
// console.log(ItemList.firstChild);
//First Element child
// console.log(ItemList.firstElementChild); 
// ItemList.firstElementChild.textContent = 'Hello 1';

// Last Child
// console.log(ItemList.lastChild);
// Last Element child
// console.log(ItemList.lastElementChild); 
// ItemList.lastElementChild.textContent = 'Hello 4 ';

// nextSibling
// console.log(ItemList.nextSibling);
// next element sibling
// console.log(ItemList.nextElementSibling);

// previous sibling
// console.log(ItemList.previousSibling);
// previous element sibling
// console.log(ItemList.previousElementSibling);
// ItemList.previousElementSibling.style.color = 'green';

//create element and insert into html through js

//create element 
var newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';
//add id
newDiv.id = 'hello1'
//add attribute
newDiv.setAttribute('title','hello Div');
//create text node
var newDivText = document.createTextNode('Hello World');
//add text to div
newDiv.appendChild(newDivText);
//inert this on htmlpage through js this is only in js now
var container = document.querySelector('header .container');
var h1 = document.querySelector('h1');
newDiv.style.fontSize = '22px';
//  console.log(newDiv);
container.insertBefore(newDiv,h1);

var main = document.querySelector('#main');
var items = document.querySelector('#items');
newDiv.style.fontSize='30px';
main.insertBefore(newDiv,items);
